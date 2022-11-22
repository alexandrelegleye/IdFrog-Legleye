import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { isLoadingState, profileConnexionstate } from "../../../atomes/profileAtomes";
import { profileDetailState } from "../../../atomes/profileAtomes";
import {  useRecoilValue } from "recoil";
import { getProjectById } from "../../../services/projectService";
// Componenets
import PostProjectForm from "../../../components/UI/forms/PostProjectForm/PostProjectForm";
// Materail UI


// CSS
import "./editProjectStyles.scss";
import PostProjectPlaceholder from "../../../components/UI/Placeholder/PostProjectPlaceholder";
import { useParams } from "react-router-dom";

function EditProject() {
  const { token } = useRecoilValue(profileConnexionstate);
  const profileDetail = useRecoilValue(profileDetailState);
  const [projectDetail, setProjectDetail] = useState("")
  const isLoading = useRecoilValue(isLoadingState)
  let { id } = useParams();
  
  const fetchProjectData = async (project_id) => {
    const response = await getProjectById(project_id)
    setProjectDetail(response.data)
  }

  useEffect(() => {
    fetchProjectData(id)
  },[id])

  return (
    <>
      {isLoading ?  (
        <div className="post-project-container">
          <PostProjectPlaceholder />
        </div>
      )
        : 
        (
          <div className="post-project-container">
            {profileDetail.id && projectDetail.id && (
              <PostProjectForm
                projectDetail={projectDetail}
                token={token}
                profileStatus={
                  profileDetail.person?.status ?? profileDetail.society?.status
                }
              />
            )}
          </div>
        )
      }
    </>

  );
}
EditProject.propTypes = {};

EditProject.defaultProps = {};

export default React.memo(EditProject);
