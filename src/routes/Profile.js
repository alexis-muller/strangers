import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = ({ token }) => {
  let navigate = useNavigate();
  useEffect(() => {
    // if (!token) {
    //   return <Navigate to="/login" />;
    // }
    fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (!result.success) {
          navigate("../login", { replace: true });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Profile</h1>
    </main>
  );
};

export default Profile;
