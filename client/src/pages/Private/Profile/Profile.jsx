import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isLoadingState, profileDetailState } from "../../../atomes/profileAtomes";
import ProfileForm from "../../../components/UI/forms/ProfileForm/ProfileForm";
import ProfilePlaceholder from "../../../components/UI/Placeholder/ProfilePlaceholder";
// import PropTypes from 'prop-types';

// CSS
import "./profileStyles.scss";

function Profile() {
  
  const isLoading = useRecoilValue(isLoadingState);
  const [profileStatus, setProfileStatus] = useState("");
  const profileDetail = useRecoilValue(profileDetailState);

  const handleStatusChange = (e) => {
    setProfileStatus(e)
  }

  useEffect(() => {
    const status = profileDetail.person?.status ?? profileDetail.society?.status
    setProfileStatus(status)
  }, [profileDetail]);

  return (
    <div className="profile">
      {!isLoading ?
        <ProfileForm
          profileDetail={profileDetail}
          profileStatus={profileStatus}
          handlestatus={handleStatusChange}
        />
        : <ProfilePlaceholder />}
    </div>
  );
}
Profile.propTypes = {};

Profile.defaultProps = {};

export default React.memo(Profile);
