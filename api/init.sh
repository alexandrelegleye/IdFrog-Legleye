# j'enregistre une variable d'environnement le temps d'exécution du script
export PGUSER=idfrog

# je supprime la BDD idfrog si elle existe
dropdb idfrog

# je supprime l'utilisateur idfrog s'il existe
dropuser idfrog

# je crèe un utilisateur idfrog
createuser idfrog -W

echo "1- Utilisateur créé"

# je crèe la BDD idfrog
createdb idfrog -O idfrog

echo "2- BDD créée"

# j'initialise mon projet sqitch
sqitch init idfrog --engine pg --top-dir migrations --target idfrog

echo "3- Sqitch initialisé"