import React, { useEffect, useState } from "react";
import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import Footer from "../../components/Footer/Footer";
import NavigationHeader from "../../components/Navigation/NavigationHeader/NavigationHeader";
import { getProjectsList } from "../../services/projects";
import  Pagination  from "@mui/material/Pagination";
import  Container  from "@mui/material/Container";

// import PropTypes from 'prop-types';

function Home() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage]= useState(9);
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  
  const nbPage = Math.ceil(result.length / cardsPerPage)
  
  useEffect(
    () => {
      const FetchData = async () => {
        try{
          const response = await getProjectsList();
          //console.log(response.data);
          setResult(response.data);
        }
        catch (error) {
          console.log(error);
        }
      };
      // mon effet s'executera sur le mount
      FetchData(); // fetchData est asynchrone je l'appele simplement sans attendre la suite
    },
    [], // tableau de dependances vide => effet sur le mount
  );
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = result.slice(indexOfFirstCard, indexOfLastCard)
  
  return (
    <>
      <NavigationHeader />
      <ProjectCardList 
        result={currentCards}
      />
      <Container component="section" maxWidth="lg" sx={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
        <Pagination count={nbPage} page={currentPage} onChange={handleChange} />
      </Container>
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);
