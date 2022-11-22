import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../../services/projectService";
import { useNavigate } from "react-router-dom";

//import PropTypes from 'prop-types';

import ContributForm from "../../../components/UI/forms/ContributForm/ContributForm";
import ContributPlaceholder from "../../../components/UI/Placeholder/ContributPlaceholder";

// CSS
import "./contributionStyles.scss";



function Contribution() {

  let navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false)
  const [projectDetail, setProjectDetail] = useState("");
  const { id } = useParams()
  //console.log("contributions", id, isLoading);

  const FetchProjectDetail = async () => {
    setIsLoading(true)
    const response = await getProjectById(id);
    //console.log(response);
    setIsLoading(false)
    if (response.status !== 200){
      return navigate("/");
    }
    setProjectDetail(response.data)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchProjectDetail()

  }, []);

  return (
    <div className="contribut-container">

      {isLoading ? <ContributPlaceholder /> :  <ContributForm 
        projectId={id}
        projectDetail={projectDetail}
      />}

    </div>
  );
}
Contribution.propTypes = {};

Contribution.defaultProps = {};

export default React.memo(Contribution);
