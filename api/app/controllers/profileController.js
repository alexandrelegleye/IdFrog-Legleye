const {Profile, Person} = require('../models');

const Society = require('../models/society')

const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const jsonwebtoken = require('jsonwebtoken');

const profileController = {

        /** connexion */

    login: async (req,res) => {

     const jwtSecret = process.env.JWT_SECRET;

     const {email, password} = req.body
     try {
        const searchedProfile = await Profile.scope('withPassword').findOne({
            where: {
                email: email
            }
        })
        if (!searchedProfile) {
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        }

        const validPwd = bcrypt.compareSync(password, searchedProfile.password);
        if (!validPwd) {
            const error = new Error("Login error, Email or Password Invalid");
            return res.status(401).json({
                message: error.message
            });
        }


        searchedProfile.password = null

        const jwtContent = { userId: searchedProfile.id };
        const jwtOptions = { 
        algorithm: 'HS256', 
        expiresIn: '3h' 
        };

        //console.log('<< 200', searchedProfile.email);

        res.status(200).json({ 
            pseudo: searchedProfile.pseudo,
            token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
        });

        } catch(error) {
            console.log(error);
            return res.render('login', {error: error});
        }
    },

        /** inscription */
    suscribe: async (req, res) => {

        const{  email,
                password,
                confirmPassword,
                pseudo} = req.body

        try {
            // vérifie que le format de l'email est valide ex: user@user.com
            if (!emailValidator.validate(req.body.email)) {
                const error = new Error("Email format is not valid");
                return res.status(400).json({ message: error.message });
            }
            if (!password) {
                const error = new Error("Password is missing");
                return res.status(400).json({ message: error.message });
            }
            if (!confirmPassword) {
                const error = new Error("Confirm Password is missing");
                return res.status(400).json({ message: error.message });
            }
            if (confirmPassword !== password) {
                const error = new Error("Password and Confirm Password are different");
                return res.status(400).json({ message: error.message });
            }
            if (!pseudo) {
                const error = new Error("Pseudo is missing");
                return res.status(400).json({ message: error.message });
            }

            const searchedProfile = await Profile.findOne({
                where: {
                    email: email // on récupère l'email passé dans le post, qui va nous servir à compléter la condition where
                }
            });

            //console.log(searchedProfile);

            if (searchedProfile) {
                const error = new Error("Email already exists");
                return res.status(400).json({ message: error.message });
            }

            const pseudoValidator = await Profile.findOne({
                where: {
                    pseudo: pseudo // on récupère l'email passé dans le post, qui va nous servir à compléter la condition where
                }
            })

            if (pseudoValidator){
                const error = new Error("Pseudo is not Available");
                return res.status(400).json({ message: error.message });
            }


            // encrypter le mdp
            // ici on encrypte le mdp via le module bcrypt, qui nous demande en premier paramètre le mdp et en deuxième paramètre le nombre de tour de hashage
            const encryptedMsg =  bcrypt.hashSync(password, 10);

          const newProfile = Profile.build({
              email: email,
              password: encryptedMsg,
              pseudo: pseudo,
          });
          
          await newProfile.save();
      
          res.status(201).json(newProfile);
      
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: error.message });
        }
      },
        
      patchProfileById: async (req, res) => {

        const tokenId = req.auth.userId

        const {
            pseudo,
            email,
            } = req.body;

        try{
        const profileToPatch = await Profile.findByPk(tokenId);

        if(pseudo){
            profileToPatch.pseudo = pseudo
        }

        if (email){
            profileToPatch.email = email
        }

        await profileToPatch.save()
       //  console.log('in Patch Profile', tokenId);
        res.status(201).json(profileToPatch);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }

      },

    getProfileById: async (req,res) => {
		try {
            //console.log(req.session);
			//const profileId = Number(req.params.id);
            const tokenId = req.auth.userId;

            /*  if (!profileId) {
                const error = new Error(`'profileId' property is missing`);
                return res.status(400).json({ message: error.message });
            } */
            if (!tokenId) {
                const error = new Error(`You must login`);
                return res.status(401).json({ message: error.message });
            }
          /*   if (profileId !== tokenId) {
                const error = new Error(`You must login`);
                return res.status(401).json({ message: error.message });
            } */

			const profile = await Profile.findByPk(tokenId, {
				include: [
                    {
                        association: 'contributions',
                        include: 'project',
                        },
					'projects',
                   /*  'contributions', */
                    'society',
                    'person'                    
				],
			});

			if (!profile) { // Si `profile` == null || undefined || false
				const error = new Error(`profile not found with id ${ profileId }`);
				return res.status(404).json({
					message: error.message
				});
			}
			
			res.status(200).json(profile);

		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: error.message
			});
		}
	},


    fillProfil : async (req, res) => {

        const tokenId = req.auth.userId;
       // const profileIdparams = req.params.id
        const {
            status,
            // Details for a person :
            first_name,
            last_name,
            birth_date,
            birth_place,
            gender,            
            nationality,
            adress,
            city,
            zip_code,
            phone_number,
            avatar_url,
            // Details for a society:
            siret,
            name,
            } = req.body;

        // Global check:             
	    if (!tokenId) {
	    	const error = new Error(`'profile_id' property is missing`);
	    	return res.status(400).json({ message: error.message });
	    }
        if (!status) {
	    	const error = new Error(`'status' property is missing`);
	    	return res.status(401).json({ message: error.message });
	    }

        try{
            
            const profileToFill = await Profile.findByPk(tokenId, {
				include: [
                    'society',
                    'person'                    
				],
			});

			if (!profileToFill) { // Si `profile` == null || undefined || false
				const error = new Error(`profile not found with id ${ tokenId }`);
				return res.status(404).json({
					message: error.message
				});
			}

            if (profileToFill.society || profileToFill.person){
                const error = new Error(`profile already completed`);
				return res.status(400).json({
					message: error.message
				});
			}



            // Property check for a person or association:
            if (status === 'person' || status === 'association'){

                if (!first_name) {
                    const error = new Error(`'first_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!last_name) {
                    const error = new Error(`'last_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!last_name) {
                    const error = new Error(`'last_name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!birth_place) {
                    const error = new Error(`'birth_place' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!gender) {
                    const error = new Error(`'gender' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!nationality) {
                    const error = new Error(`'nationality' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!adress) {
                    const error = new Error(`'adress' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!city) {
                    const error = new Error(`'city' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!zip_code || typeof(Number(zip_code))!== 'number') {
                    const error = new Error(`'zip_code' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!phone_number) {
                    const error = new Error(`'phone_number' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (!avatar_url) {
                    avatar_url_value = ''
                } else {
                    avatar_url_value = avatar_url
                }
                

                const fillPerson = Person.build({
                    profile_id: Number(tokenId),
                    status,
                    first_name: first_name.trim(),
                    last_name: last_name.trim(),
                    birth_date,
                    birth_place: birth_place.trim(),
                    gender,            
                    nationality: nationality.trim(),
                    adress: adress.trim(),
                    city: city.trim(),
                    zip_code: Number(zip_code),
                    phone_number: phone_number.replace(/\s/g,''),
                    avatar_url: avatar_url_value.trim(),
                  });

                  await fillPerson.save();          
                  res.status(201).json(fillPerson);       

            } // end check for person or association //

            // Property check for a society:
            if (status === 'society'){
                if (!siret) {
                    const error = new Error(`'siret' property is missing`);
                    return res.status(401).json({ message: error.message });
                }
                if (typeof(Number(siret)) !== 'number') {
                    const error = new Error(`'siret' property must be a number`);
                    return res.status(401).json({ message: error.message });
                }
                if (!name) {
                    const error = new Error(`'name' property is missing`);
                    return res.status(401).json({ message: error.message });
                }

                const fillSociety = Society.build({
                    profile_id: Number(tokenId),
                    siret: Number(siret),
                    name: name.trim(),
                    status,
                  });

                  await fillSociety.save();          
                  res.status(201).json(fillSociety); 

              
            }// end check for society //

        }
        catch(error){
            console.error(error);
            res.status(500).json({ message: error.message });
        }

    },

    patchProfil : async (req, res) => {

        const profileIdparams = req.auth.userId;
        const {
            status,
            // Details for a person :
            first_name,
            last_name,
            birth_date,
            birth_place,
            gender,            
            nationality,
            adress,
            city,
            zip_code,
            phone_number,
            avatar_url,
            // Details for a society:
            siret,
            name,
            } = req.body;

        // Global check:             
	    if (!profileIdparams) {
	    	const error = new Error(`'profile_id' property is missing`);
	    	return res.status(400).json({ message: error.message });
	    }
	    
        if (!status) {
	    	const error = new Error(`'status' property is missing`);
	    	return res.status(401).json({ message: error.message });
	    }

        try{     
            
            
            const profileToPatch = await Profile.findByPk(profileIdparams, {
				include: [
                    'society',
                    'person'                    
				],
			});

			if (!profileToPatch) { // Si `profile` == null || undefined || false
				const error = new Error(`profile not found with id ${ profileIdparams }`);
				return res.status(404).json({
					message: error.message
				});
			}

            if (profileToPatch.society){  // It's a society to patch
                
                if (typeof(Number(siret)) !== 'number') {
                        const error = new Error(`'siret' property must be a number`);
                        return res.status(401).json({ message: error.message });
                }

                const patchSociety = await Society.update({
                    siret: Number(siret),
                    name: name.trim(),
                    update_at: Date.now(),
                },
                {
                    where: {id: profileToPatch.society.id},
                    returning:true
                });
         
                res.status(201).json(patchSociety); 
               }// end check for society //

			
            if (profileToPatch.person){ // It's a person or association top patch

                if (!avatar_url) {
                    avatar_url_value = ''
                } else {
                    avatar_url_value = avatar_url
                }

                
                const patchPerson = await Person.update({
                    first_name: first_name.trim(),
                    last_name: last_name.trim(),
                    birth_date,
                    birth_place: birth_place.trim(),
                    gender,            
                    nationality: nationality.trim(),
                    adress: adress.trim(),
                    city: city.trim(),
                    zip_code: Number(zip_code),
                    phone_number: phone_number.replace(/\s/g,''),
                    avatar_url: avatar_url_value.trim(),
                    update_at: Date.now(),
                },
                {
                    where: {id: profileToPatch.person.id},
                    returning: true,
                }
                  );

            res.status(201).json(patchPerson); 
             } // end patch for person or association //

            } catch(error){
            console.error(error);
            res.status(500).json({ message: error.message });
        }

    },
    
    
    logout : (req, res) => {

        //console.log(req.session.profile);
        req.session.profile = false;
       // console.log(req.session.profile);
        res.status(200).json({message: "Logout"});

    }


};

module.exports = profileController;
