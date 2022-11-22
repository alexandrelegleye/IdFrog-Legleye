import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';

import { Box, Button } from "@mui/material";
import DownloadingTwoToneIcon from "@mui/icons-material/DownloadingTwoTone";

import "./uploadAvatarStyle.scss";

function UploadImages() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />

      {imageUrl && selectedImage && (
        <Box textAlign="center">
          <img
            src={imageUrl}
            alt={selectedImage.name}
            className="preview-image"
          />
        </Box>
      )}
      <label htmlFor="select-image">
        <Button
          sx={{ borderRadius: 60 }}
          variant="contained"
          color="primary"
          component="span"
          endIcon={<DownloadingTwoToneIcon />}
        >
          Mon Avatar
        </Button>
      </label>
    </>
  );
}

UploadImages.propTypes = {};

UploadImages.defaultProps = {};

export default React.memo(UploadImages);
