-- -----------------------------------------------------
-- Schema IdFrogBEGIN;

-- Comme c'est un script de création de tables ont s'assure que celles-ci
-- Soit supprimées avant de les créées.
-- On peut supprimer plusieurs tables en même temps

DROP TABLE IF EXISTS
"profile",
"category",
"person",
"society",
"project",
"comment",
"contribution";

-- -----------------------------------------------------
-- Table "profil"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "profile" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "pseudo" text NOT NULL UNIQUE,
  "is_admin" boolean NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "category"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" text NOT NULL,
  "color" text NOT NULL DEFAULT '#FFFFFF',
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "person"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "person" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "profile_id" INT NOT NULL REFERENCES "profile" ("id"),
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "birth_date" date DEFAULT NULL,
  "birth_place" text DEFAULT NULL,
  "gender" text DEFAULT NULL,
  "status" text DEFAULT NULL,
  "nationality" text DEFAULT NULL,
  "adress" text DEFAULT NULL,
  "city" text DEFAULT NULL,
  "zip_code" INT DEFAULT NULL,
  "phone_number" text DEFAULT NULL, 
  "avatar_url" text DEFAULT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "society"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "society" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "siret" text NOT NULL,
  "profile_id" INT NOT NULL REFERENCES "profile" ("id"),
  "name" text NOT NULL,
  "status" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "project"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "project" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "profile_id" INT NOT NULL REFERENCES "profile" ("id"),
  "category_id" INT NOT NULL REFERENCES "category" ("id"),
  "name" text NOT NULL,
  "invest_type" text NOT NULL,
  "amount_target" INT NOT NULL,
  "rate" decimal NOT NULL,
  "end_time" date NOT NULL,
  "img_url" text NULL,
  "web_url" text NULL,
  "title" text NOT NULL,
  "resume" text NOT NULL,
  "description" text NOT NULL,
  "visibility" boolean NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(), 
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "comment"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "comment" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "profile_id" INT NOT NULL REFERENCES "profile" ("id"),
  "project_id" INT NOT NULL REFERENCES "project" ("id"),
  "text" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "contribution"
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS "contribution" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "profile_id" INT NOT NULL REFERENCES "profile" ("id"),
  "project_id" INT NOT NULL REFERENCES "project" ("id"),
  "invested_amount" INT NOT NULL,
  "sold" boolean NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "updated_at" timestamptz
);



-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;