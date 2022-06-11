import AuthForm from "../components/AuthForm";

const Register = ({ setToken }) => {
  return (
    <main>
      <h1>Register</h1>
      <AuthForm setToken={setToken} registerOrLogin="register" />
    </main>
  );
};

export default Register;
