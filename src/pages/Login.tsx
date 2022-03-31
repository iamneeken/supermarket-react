import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";
import LoginForm from "../components/LoginForm/LoginForm";

function Login(): JSX.Element {
  return (
    <>
      <BreadcrumbComponent page="Login" />
      <LoginForm />
    </>
  );
}

export default Login;
