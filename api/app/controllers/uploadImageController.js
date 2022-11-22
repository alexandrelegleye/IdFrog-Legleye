const fs = require('fs')
const path = require('path')
const uploadImageController = {

uploadProjectImage : (req, res) => {

  const tokenId = req.auth.userId;

  
  if (!tokenId) {
    const error = new Error(`'profile_id' property is missing`);
    return res.status(400).json({ message: error.message });
  }
 
  const rootDirectory = require('path').resolve('./');
  
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    
    const UploadDate = Date.now()
    // The name of the input field is used to retrieve the uploaded file
    const projectImage = req.files.projectImage;
    const uploadPath = `${rootDirectory}/data/ProjectsImages/project-${UploadDate}-${projectImage.name}`;

    // check if file already exist
    if(fs.existsSync(uploadPath)){
      const error = new Error(`Change the file name`);
      return res.status(400).json({ message: error.message });
    }
  
    // Use the mv() method to place the file somewhere on your server
    projectImage.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).send(err);

        res.status(201).json({path:`/data/ProjectsImages/project-${UploadDate}-${projectImage.name}`})

    });
  }
}

module.exports = uploadImageController