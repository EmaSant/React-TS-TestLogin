import DashboardCard from "./DashBoardCard/DashboardCard";
import { useEffect } from "react";
import { userApi } from "../../services/Api";
import axios from "axios";

import { RootState } from "../../redux/store";
import {
  setUser,
  setEmail,
  setImgUrl,
} from "../../redux/userInfoSlice/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  //OLD replaced with redux state managing
  //const [user, setUser] = useState("");
  //const [email, setEmail] = useState("");
  //const [imageUrl, setImageUrl] = useState("");

  //State variables declaration through redux store
  const user = useSelector((state: RootState) => state.userInfo.user);
  const email = useSelector((state: RootState) => state.userInfo.email);

  //Works but not utilized in final page
  const imageUrl = useSelector((state: RootState) => state.userInfo.imgUrl);

  const dispatch = useDispatch();

  //Fetching Mock API user info on first load
  useEffect(() => {
    axios
      .get(userApi)
      .then((res) => {
        dispatch(setUser(res.data.user));
        dispatch(setEmail(res.data.email));
        dispatch(setImgUrl(res.data.imgUrl));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setUser("errore"));
        dispatch(setEmail("errore"));
        dispatch(setImgUrl("errore"));
      });
  }, []);

  //Using the dashboardCard children to render the page.
  return (
    <>
      <DashboardCard user={user} email={email} imageUrl={imageUrl} />
    </>
  );
}

export default Dashboard;
