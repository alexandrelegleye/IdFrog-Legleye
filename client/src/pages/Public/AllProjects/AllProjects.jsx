import React, { useEffect, useState, useRef } from "react";
import ProjectCardList from "../../../components/ProjectCardList/ProjectCardList";
// Services
import { getProjectsList } from "../../../services/projectService";

// Material UI
import { Container } from "@mui/material";

// CSS
import "./allProjectsStyles.scss";

// import PropTypes from 'prop-types';

function AllProject() {

  const [result, setResult] = useState([]);
  const flag = useRef(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (flag.current === false) {
      getProjectsList()
        .then((res) => {
          // Liste dans le state
          setResult(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  return (
    <div className="allProjects">
      <ProjectCardList result={result}
        cardPerPages={6}
        isLoading={isLoading}
      />
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      </Container>
    </div>
  );
}
AllProject.propTypes = {};

AllProject.defaultProps = {};

export default React.memo(AllProject);
