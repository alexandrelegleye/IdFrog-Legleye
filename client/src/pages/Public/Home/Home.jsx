import React, { useState, useEffect } from "react";

// import PropTypes from 'prop-types';

//  Services
import { getProjectsList } from "../../../services/projectService";
// Components
import ProjectCardList from "../../../components/ProjectCardList/ProjectCardList";
import Head from "../../../components/Head/Head";
import TopFooter from "../../../components/TopFooter/TopFooter";

// Material UI
import { Container, Box } from "@mui/material";

// CSS
import "./homeStyles.scss";

function Home() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  const FetchData = async () => {
    try {
      setIsLoading(true)
      const response = await getProjectsList();
      //console.log(response.data);
      setResult(response.data);
      // TODO redirect vers 404 si status 404
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Head />
      <Box className="allCards">
        {result && 
        <ProjectCardList result={result}
          cardPerPages={3}
          isLoading={isLoading}
        />
        }
        
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        </Container> 
      </Box>
      <TopFooter />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);
