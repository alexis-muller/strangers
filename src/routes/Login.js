import AuthForm from "../components/AuthForm";

const Login = ({ setToken }) => {
  return (
    <main>
      <h1>Login</h1>
      <AuthForm setToken={setToken} registerOrLogin="login" />
    </main>
  );
};

export default Login;
