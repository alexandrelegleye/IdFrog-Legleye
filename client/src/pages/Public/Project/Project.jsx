import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { Grid, CardMedia } from "@mui/material";
// Services
import {getProjectById} from "../../../services/projects";
// Components
import ProjectDescription from "../../../components/ProjectDescription/ProjectDescription"
import ProjectDetails from "../../../components/ProjectDetails/ProjectDetails";
import ProjectCollect from "../../../components/ProjectCollect/ProjectCollect";

const Project = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate()
  const flag = useRef(false)

  // Récupération de la liste des utilisateurs à l'affichage
  useEffect(() => {
    setIsLoading(true)
    window.scrollTo(0, 0);
    if (flag.current === false) {
      getProjectById(id)
        .then((res) => {
          // Liste dans le state
          setResult(res.data);
          setIsLoading(false)
          //console.log("reponse dans project", res); 
          if (res.status === 404) {            
            return navigate("/");
          } 
        })
        .catch((err) =>console.log(err)
        )}
    return () => (flag.current = true);
  },[id]);

  return (
    <Grid container spacing={5} sx={{p: "0 50px", mt: "5px", maxWidth: "80%", margin: "auto"}}>
      <Grid item xs={12} md={12}>
        <CardMedia
          component="img"
          height="140"
          src={`https://picsum.photos/1200/800?random=${id}`}
          alt={result.projet}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <ProjectDescription
          result={result}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProjectCollect
          id={result.id}
          projet={result.name}
          amount={result.amount_target}
          description={result.description}
          profile={result.profile?.pseudo}
          visibility={result.visibility}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <ProjectDetails
          result={result}
        />
      </Grid>
    </Grid>
  );
};

export default Project;