// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css";
import { FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const signOutSuccess = () => toast.success("Sign Out Successfully!");
  //   const welcomeMessage = () => toast(`Welcome ${email}!`);
  //   const signOutError = () => toast.error("Server Error!");

  const signout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  //   const welcomeMessage = () =>
  //     toast("Welcome to AuthXpert 🚀", {
  //     });
  //     useEffect(() => {
  //         setTimeout(() => {
  //           welcomeMessage();
  //         }, 100);
  //       }, []);

  return (
    <>
      <h1 className="home-heading">Welcome to the AuthXpert 🚀</h1>
      <p className="home-message">You have successfully Signed In!</p>
      <button
        className="sign-out-btn"
        onClick={() => {
          signOutSuccess();
          signout();
        }}
      >
        Sign Out &nbsp;
        <FaSignOutAlt className="icon" />
      </button>
      <ToastContainer />
    </>
  );
};

export default Home;
