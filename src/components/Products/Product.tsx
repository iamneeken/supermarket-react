import BreadcrumbComponent from "../Breadcrumbs/BreadcrumbComponent";
import DisplayProduct from "./DisplayProduct";

function Product(): JSX.Element {
  return (
    <>
      <BreadcrumbComponent page="All Products" />

      <DisplayProduct />
    </>
  );
}

export default Product;
