import React from "react";
import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";
import SnacksComponent from "../components/ProductSnacks/SnacksComponent";

function Snacks() {
  return (
    <>
      <BreadcrumbComponent page="Snacks" />
      <SnacksComponent />
    </>
  );
}

export default Snacks;
