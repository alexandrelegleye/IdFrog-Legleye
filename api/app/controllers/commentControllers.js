const sequelize = require('sequelize');
const { Comment } = require('../models');


const commentController = {

  commentProject: async (req, res) => {

   
   const tokenId = req.auth.userId

    try {
      const project_id = Number(req.params.projectId);
      
      const { text } = req.body;

	      if (!tokenId) {
		    const error = new Error(`'profile_id' property is missing`);
		    return res.status(400).json({ message: error.message });
	      }
       
        if (!text) {
          const error = new Error(`'text' property is missing`);
          return res.status(400).json({ message: error.message });
        }

      const newComment = Comment.build({
        profile_id: tokenId,
        project_id,
        text : text.trim(),
      });
      
      await newComment.save();
      res.status(201).json(newComment);

    }
    catch(error){
      console.error(error);
      res.status(500).json({message: error.message});
    }

    },

    patchComment: async (req, res) => {

        // /profile/:profileId/comment/:projectId
     
         try {
           const comment_id = Number(req.params.commentId);
           const profile_id = Number(req.params.profileId)
           
           const { text } = req.body;
     
            if (!profile_id) {
                 const error = new Error(`'profile_id' property is missing`);
                 return res.status(400).json({ message: error.message });
            }
            if (!comment_id) {
                const error = new Error(`'comment_id' property is missing`);
                return res.status(400).json({ message: error.message });
           }
            if (!req.session.profile) {
                 const error = new Error(`'You must login`);
                 return res.status(401).json({ message: error.message });
            }	
            if (profile_id !== req.session.profile.id) {
                 const error = new Error(`'You must login before making a contribution`);
                 return res.status(401).json({ message: error.message });
            }
            
            if (!text) {
               const error = new Error(`'text' property is missing`);
               return res.status(400).json({ message: error.message });
            }
     
           const CommentToPatch = await Comment.update({
            text : text.trim(),
           },
           {
            where: {id: comment_id},
            returning: true,
            }
           );
           
           res.status(201).json(CommentToPatch);
     
         }
         catch(error){
           console.error(error);
           res.status(500).json({message: error.message});
         }
     
         },

    deleteComment: async (req, res) => {
        try {
            const profile_id = Number(req.params.profileId);
            const comment_id = Number(req.params.commentId);
    
    
            // Check to be sure that the session ID = the profile_id requested
            if (!profile_id) {
                const error = new Error(`'profile_id' property is missing`);
                return res.status(400).json({ message: error.message });
            }
            if (!req.session.profile) {
                const error = new Error(`You must login`);
                return res.status(401).json({ message: error.message });
            }	
            if (profile_id !== req.session.profile.id) {
                const error = new Error(`You must login before delete a comment`);
                return res.status(401).json({ message: error.message });
            }
    
            const commentToDelete = await Comment.findByPk(comment_id);

            if(!commentToDelete){
                const error = new Error(`Comment not found`);
                return res.status(400).json({ message: error.message });
            }    
            if(commentToDelete.profile_id !== profile_id){
                const error = new Error(`You must login before delete a comment`);
                return res.status(400).json({ message: error.message });
            }
            
            await commentToDelete.destroy();
              
              res.status(201).json(commentToDelete);
    
        } // fin du try
        catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
         }
    }

};

module.exports = commentController;