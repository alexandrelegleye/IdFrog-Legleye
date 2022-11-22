import React, {useState, useEffect}  from "react";
import { Outlet, useNavigate} from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { isLoadingState, profileConnexionstate, profileDetailState } from "../../atomes/profileAtomes";
import { getProfile } from "../../services/profileService";


// Componentes
import NavigationSideBar from "../../components/Navigation/NavigationSideBar/NavigationSideBar";

// CSS
import "./layoutPrivateStyles.scss"

const LayoutPrivate = () => {

  let navigate = useNavigate();
  const {token} = useRecoilValue(profileConnexionstate);
  const [projectList, setProjectList] = useState([]);
  const [contributionList, setcontributionList] = useState([]);
  const [ProfileDetail, setProfileDetail] = useRecoilState(profileDetailState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState)
  const ResetProfileInfo = useResetRecoilState(profileConnexionstate)

  // eslint-disable-next-line no-unused-vars
  const [serverError, setServerError] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [showError, setShowError] = useState(false)
    

  const FetchProfileData = async (token) => {
    setIsLoading(true)
    let response = await getProfile(token)
    //console.log("getprofile response", response); 

    if(response.status!==200){
      setServerError({
        status : response.status,
        message: response.data.message
      })
      setShowError(true)
      ResetProfileInfo()
      setIsLoading(false)
      return navigate("/login");    
    }
    setProjectList(response.data.projects);
    setcontributionList(response.data.contributions)
    setProfileDetail(response.data)
    setIsLoading(false)
    return
  }

  useEffect(() => {
    FetchProfileData(token)
  },[]);

  return (       
    <div className="layoutPrivate">
      {ProfileDetail.id && 
            <div className="profile" style={{display:"flex"}}>
              <NavigationSideBar 
                projectList={projectList}
                contributionList={contributionList}
                isLoading={isLoading}
                className="sideBar" />
              <div className="profile-container">
                <Outlet />
              </div>
            </div>
      }
            
    </div>
  );
};

export default LayoutPrivate;