import RiceComponent from "../components/Rice/RiceComponent";
import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";

function Momo() {
  return (
    <>
      <BreadcrumbComponent page="Rice and Noodles" />
      <RiceComponent />
    </>
  );
}

export default Momo;
