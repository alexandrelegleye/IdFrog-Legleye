const sequelize = require('sequelize');
const { Contribution } = require('../models');


const contributionController = {

  makeContribution: async (req, res) => {


    try {
      const project_id = Number(req.params.projectId);
      
      const {
        invested_amount,
        sold,
      } = req.body;

        //decrypter le token
        const userId = req.auth.userId

        //console.log(userId);

        // verifier que l'id dans le token = profile_id
        if (sold === null || typeof(sold) === 'undefined') {
          const error = new Error(`Error in Sold Boolean`);
          return res.status(401).json({ message: error.message });
        } 
        if (!userId) {
          const error = new Error(`'You must login before making a contribution`);
          return res.status(401).json({ message: error.message });
        }     

        if (!invested_amount) {
            const error = new Error(`'invested_amount' property is missing`);
            return res.status(400).json({ message: error.message });
        }
      
      const newContribution = Contribution.build({
        profile_id: userId,
        project_id,
        sold,
        invested_amount : Number(invested_amount),
      });
      
      await newContribution.save();
      res.status(201).json(newContribution);

    }
    catch(error){
      console.error(error);
      res.status(500).json({message: error.message});
    }

    },

};

module.exports = contributionController;