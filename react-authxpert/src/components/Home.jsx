// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
      <h1 className="text-4xl font-bold mb-4">Welcome to the AuthXpert 🚀</h1>
      <p className="text-lg mb-8">You have successfully Signed In!</p>
      <button
        onClick={() => {
          signOutSuccess();
          signout();
        }}
        className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition"
      >
        Sign Out
      </button>
      <ToastContainer />
    </>
  );
};

export default Home;
