/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";

// import PropTypes from 'prop-types';

// Components
import ProjectCard from "../ProjectCard/ProjectCard";

import CardPlaceholder from "../UI/Placeholder/CardPlaceholder";
import { category, financingTypes } from "../UI/forms/PostProjectForm/category";

// Material UI

import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
// CSS
import { projectCardStyles } from "./styles";
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";

function ProjectCardList({ result, isLoading, cardPerPages }) {
  const {isLogged} = useRecoilValue(profileConnexionstate)
  const [filterResult, setFilterResult] = useState(result);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [financingTypeFilter, setFinancingTypeFilter] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
    //setCardsPerPage;
  };

  const nbPage = Math.ceil(filterResult.length / cardPerPages);
  const indexOfLastCard = currentPage * cardPerPages;
  const indexOfFirstCard = indexOfLastCard - cardPerPages;
  const currentCards = filterResult.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    //console.log(result);
    let filteredResults = result.filter((item) => {
      // Boucle sur chaque projet de l'objet result
      if(isLogged === false && item.visibility === false){
        return false;
      }
      if (
        categoryFilter === item.category_id &&
        financingTypeFilter === item.invest_type
      ) {
        return true;
      }
      if (
        (categoryFilter === "" || categoryFilter === 1) &&
        financingTypeFilter === item.invest_type
      ) {
        return true;
      }
      if (
        (financingTypeFilter === "" || financingTypeFilter === "all") &&
        categoryFilter === item.category_id
      ) {
        return true;
      }
      if (
        (categoryFilter === "" || categoryFilter === 1) &&
        (financingTypeFilter === "" || financingTypeFilter === "all")
      ) {
        return true;
      }
      return false;
    });

    // console.log('results', filteredResults);
    setFilterResult(filteredResults);
    setCurrentPage(1);
  }, [categoryFilter, financingTypeFilter, result]);

  return (
    <>
      <Container component="section" sx={{ mt: 5 }} maxWidth="lg">
        <Box component="section">
          <Grid
            container
            spacing={0}
            alignItems="stretch"
            justifyContent="center"
            sx={projectCardStyles.selectBox}
          >
            <Grid item xs={12} md={4} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Catégorie</InputLabel>
                <Select
                  sx={projectCardStyles.selectInput}
                  id="category"
                  value={categoryFilter}
                  label="Catégories"
                  onChange={
                    (event) => setCategoryFilter(event.target.value)
                    /* setCategoryFilter(event.target.value) */
                  }
                >
                  {category.map((category, index) => (
                    
                    <MenuItem key={index} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Type de financement</InputLabel>
                <Select
                  sx={projectCardStyles.selectInput}
                  id="invest_type"
                  value={financingTypeFilter}
                  label="Type de financement"
                  onChange={(event) =>
                    setFinancingTypeFilter(event.target.value)
                  }
                >
                  {financingTypes.map((financingType, index) => (
                    <MenuItem key={index} value={financingType.value}>
                      {financingType.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {!isLoading ? (
          <Grid container spacing={2} alignItems="stretch">
            {currentCards.map((res) => (
              <Grid item xs={12} md={4} sm={6} key={res.id}>
                <ProjectCard
                  id={res.id}
                  createdAt={res.created_at}
                  projet={res.name}
                  amount={res.amount_target}
                  description={res.description}
                  profile={res.profile.pseudo}
                  contributions={res.contributions}
                  img_url={res.img_url}
                  visibility={res.visibility}
                />
              </Grid>            
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2} alignItems="stretch">
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            {cardPerPages === 6 && (
              <>
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
              </>
            )}
          </Grid>
        )}
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "15px",
          }}
        >
          <Pagination
            siblingCount={0}
            count={nbPage}
            page={currentPage}
            onChange={handleChange}
            sx={{ p: 2 }}
          />
        </Container>
      </Container>
    </>
  );
}

// ProjectCardList.PropType = {};

// ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);
