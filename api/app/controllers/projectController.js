const sequelize = require('sequelize');
const {
	Project, Profile,
} = require('../models');

const { escape } = require('sanitizer');

const projectController = {

	getOneProjectById: async (req, res) => {
		try {

			const projectId = req.params.id;
			const project = await Project.findByPk(projectId, {
				include: [
					// Default Scope in Profile don't return the Password for safety
					// If we want to get Password  in the Response:						
					/* {
						model: Profile.scope('withPassword'),
						as:'profile',
					}, */
					//
					'profile',
					{
					association: 'comments',
					include: 'profile',
					},
					{
					association: 'contributions',
					include: 'profile',
					}, 					
					'category',
				],
			});


			//

			if (!project) { // Si `project` == null || undefined || false
				const error = new Error(`Project not found with id ${ projectId }`);
				return res.status(404).json({
					message: error.message
				});
			}
			//Useless Now since we configure the scope to exlude the password from the return
			//project.profile.password = null;

			res.status(200).json(project);

		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: error.message
			});
		}
	},

  createProject: async (req, res) => {
  try {
	const tokenId = req.auth.userId
	// const profile_id = Number(req.params.id);

    const {
		category_id,
		name,
		invest_type,
		amount_target,
		rate,
		end_time,
		img_url,	// allow Null in table
		web_url,	// allow Null in table
		title,
		resume,
		description,
		visibility
	} = req.body;

	// console.log(req.session);

	// Check to be sure that the session ID = the profile_id requested
	if (!tokenId) {
		const error = new Error(`'profile_id' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	
	const creatorProfile = await Profile.findByPk(tokenId,{
		include: [
		'person',
		'society'
		]
	})

	// console.log(creatorProfile);
	if (!creatorProfile) {
		const error = new Error(`Your account was not found`);
		return res.status(404).json({ message: error.message });
	}

	// check if the profile is completed before posting a project
	if (!creatorProfile.person && !creatorProfile.society) {
		const error = new Error(`You must complete your Profile before post a project`);
		return res.status(403).json({ message: error.message });
	}

	if (!category_id) {
		const error = new Error(`'category_id' property is missing`);
		return res.status(400).json({ message: error.message });
	}
    if (!name) {
      const error = new Error(`'name' property is missing`);
      return res.status(400).json({ message: error.message });
    }
	if (!invest_type) {
		const error = new Error(`'invest_type' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!amount_target) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (invest_type === 'pret' && !rate) {
		const error = new Error(`'rate' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!end_time) {
		const error = new Error(`'end_time' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!title) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!resume) {
		const error = new Error(`'amount_target' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	if (!description) {
		const error = new Error(`'description' property is missing`);
		return res.status(400).json({ message: error.message });
	}

	if (visibility === null || typeof(visibility) === 'undefined') {
		const error = new Error(`'visibility' property is missing`);
		return res.status(400).json({ message: error.message });
	}
	

    const newProject = Project.build({
	  profile_id: tokenId,
	  category_id,
	  name: escape(name), // On empêche l'injection de code HTML et JS. On se protège contre la faille XSS
	  invest_type,
	  amount_target: Number(amount_target),
	  rate: Number(rate),
	  end_time,
	  img_url,
	  web_url,	
	  title: escape(title),
	  resume: escape(resume),
	  description: escape(description),
	  visibility	 
    });
	
    await newProject.save();

    res.status(201).json(newProject);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
},

patchProject: async (req, res) => {
	try {
	    const tokenId = req.auth.userId;
		const project_id = Number(req.params.projectId);

	   // console.log(profile_id);
	    const {
	  	  category_id,
	  	  name,
	  	  invest_type,
	  	  amount_target,
	  	  rate,
	  	  end_time,
	  	  img_url,	// allow Null in table
	  	  web_url,	// allow Null in table
	  	  title,
	  	  resume,
	  	  description,
	  	  visibility
	    } = req.body;

		// Check to be sure that the session ID = the profile_id requested
		if (!tokenId) {
			const error = new Error(`'profile_id' property is missing`);
			return res.status(400).json({ message: error.message });
		}
		

		const projectToPatch = await Project.findByPk(project_id,{
			include: 'contributions'
		});

		if(projectToPatch.contributions.length !== 0){
			const error = new Error(`You can't change a project with contributions`);
			return res.status(400).json({ message: error.message });
		}
		if(projectToPatch.profile_id !== tokenId){
			const error = new Error(`You are not the owner of this project`);
			return res.status(401).json({ message: error.message });
		}

		if (category_id) {
			projectToPatch.category_id = category_id
		}
		if (name) {
			projectToPatch.name = name
		}
		if (invest_type) {
			projectToPatch.invest_type = invest_type
		}
		if (amount_target) {
			projectToPatch.amount_target = amount_target
		}
		if (rate) {
			projectToPatch.rate = rate
		}
		if (end_time) {
			projectToPatch.end_time = end_time
		}
		if (title) {
			projectToPatch.title = title
		}
		if (resume) {
			projectToPatch.resume = resume
		}
		if (description) {
			projectToPatch.description = description
		}
		if (visibility !== null && typeof(visibility) !== 'undefined') {
			projectToPatch.visibility=visibility
		}
		if (img_url) {
			projectToPatch.img_url = img_url
		}
		if (web_url) {
			projectToPatch.web_url = web_url
		}

		await projectToPatch.save();

	  
		  res.status(201).json(projectToPatch);

	} // fin du try
	catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
 	}

},

deleteProject: async (req, res) => {
	try {
	    const tokenId = req.auth.userId
		const project_id = Number(req.params.projectId);

		// Check to be sure that the session ID = the profile_id requested
		if (!tokenId) {
			const error = new Error(`'profile_id' property is missing`);
			return res.status(400).json({ message: error.message });
		}

		const projectToDelete = await Project.findByPk(project_id,{
			include: 'contributions'
		});

		if(projectToDelete.profile_id !== tokenId){
			const error = new Error(`You're not the owner of this project`);
			return res.status(401).json({ message: error.message });
		}

		if(projectToDelete.contributions.length > 0){
			const error = new Error(`You can't delete a project with contributions`);
			return res.status(400).json({ message: error.message });
		}
		
		await projectToDelete.destroy();
	  
		  res.status(201).json(projectToDelete);

	} // fin du try
	catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
 	}
},

};

module.exports = projectController;