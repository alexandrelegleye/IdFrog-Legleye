/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from 'prop-types';

// Material UI
import { Box, Button } from "@mui/material";
import DownloadingTwoToneIcon from "@mui/icons-material/DownloadingTwoTone";
// CSS
import "./uploadImageStyle.scss";

function UploadImages({
  handleImgUpload,
  selectedImage,
  img_url

}) {
  
  /*   const [img_url, setImageUrl] = useState(null);

console.log(img_url);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
     
      console.log('selectedImage', selectedImage);
      console.log('img_url', img_url);
    }
  }, [selectedImage]); */

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        /* onChange={(e) => setSelectedImage(e.target.files[0])} */
        onChange= {(e) => handleImgUpload(e.target.files[0])}
      />

      {img_url && selectedImage && (
        <Box textAlign="center">
          <img
            src={img_url}
            alt={selectedImage.name}
            className="preview-image"
          />
        </Box>
      )}
      <label htmlFor="select-image">
        <Button
          variant="contained"
          color="primary"
          component="span"
          endIcon={<DownloadingTwoToneIcon />}
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
        >
          Télécharger votre couverture
        </Button>
      </label>
    </>
  );
}

UploadImages.propTypes = {};

UploadImages.defaultProps = {};

export default React.memo(UploadImages);
