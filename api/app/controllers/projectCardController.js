const { Project } = require('../models');


const projectCardController = {

  getAllProjectCards: async (req, res) => {
    console.log('getAllProjectCards');
    try {
      const ProjectCard = await Project.findAll(
        {
          include: [
          'contributions',
          'profile',
          'category',
          ],
          order:
          [['created_at', 'ASC']]
        });

        if (!ProjectCard) { // Si `projectCard` == null || undefined || false
            const error = new Error(`No project found`);
            return res.status(404).json({ message: error.message });
        }

        res.status(200).json(ProjectCard);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
},

};


module.exports = projectCardController;   
