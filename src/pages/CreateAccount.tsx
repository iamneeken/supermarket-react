import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";
import CreateAccountForm from "../components/Create Account/CreateAccountForm";

function CreateAccount(): JSX.Element {
  return (
    <>
      <BreadcrumbComponent page="Create Account" />

      <CreateAccountForm />
    </>
  );
}

export default CreateAccount;
