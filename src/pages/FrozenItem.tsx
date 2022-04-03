import FrozenComponent from "../components/Frozen/FrozenComponent";
import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";

function FrozenItem() {
  return (
    <>
      <BreadcrumbComponent page="Frozen Items" />
      <FrozenComponent />
    </>
  );
}

export default FrozenItem;
