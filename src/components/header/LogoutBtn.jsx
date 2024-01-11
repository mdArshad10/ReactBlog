import { useDispatch } from "react-redux";
import { logout } from "../../store/features/authSlice";
import authService from "../../appwrite/auth.services";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const btnHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("some error in logout btn", error);
      });
  };
  return <div onClick={btnHandler}>LogoutBtn</div>;
};

export default LogoutBtn;
