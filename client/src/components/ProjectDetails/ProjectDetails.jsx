/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Services
import { getProjectById } from "../../services/projectService";
// Components
import Project from "./Project/Project";
import Faq from "./FAQ/Faq";
import Contributes from "./Contributes/Contributes";
import Comments from "./Comments/Comments";
// Material UI
import { Tab, Box } from "@mui/material";
import { TabList, TabContext } from "@mui/lab";
// CSS
import { projectDetailStyles } from "./styles";
import "./projectDetailsStyles.scss";

const ProjectDetails = () => {
  const [value, setValue] = useState("1");
  const [result, setResult] = useState([]);
  const { id } = useParams();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };


  const handleResult = async (projectId) => {
    try {
      const response = await getProjectById(projectId);
      setResult(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleResult(id);
  }, [id]);

  return (
    <div className="projectDetail">
      {result.length !== 0 && (
        <TabContext
          value={value}
          sx={projectDetailStyles.content}
          variant="scrollable"
          scrollButtons="on"
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant='scrollable'
              onChange={handleChange}
              sx={{ backgroundColor: "#f9f9f9" }}
              allowScrollButtonsMobile
            >
              <Tab label="PROJET" value="1" />
              <Tab label="FAQ" value="2" />
              <Tab
                label={`CONTRIBUTIONS : ${result.contributions?.length}`}
                value="3"
              />
              <Tab
                label={`COMMENTAIRES : ${result.comments?.length}`}
                value="4"
              />
            </TabList>
          </Box>
          {value === "1" && (
            <Box>
              <Project
                name={result.name}
                resume={result.resume}
                description={result.description}
              />
            </Box>
          )}
          {value === "2" && (
            <Box>
              <Faq />
            </Box>
          )}
          {value === "3" && (
            <Box>
              <Contributes contributes={result.contributions} />
            </Box>
          )}
          {value === "4" && (
            <Box>
              <Comments comments={result.comments} />
            </Box>
          )}
        </TabContext>
      )}
    </div>
  );
};

export default ProjectDetails;
