import React from "react";
import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";
import SignatureComponent from "../components/ProductSignatures/SignatureComponent";

function Signatures() {
  return (
    <>
      <BreadcrumbComponent page="Signatures" />
      <SignatureComponent />
    </>
  );
}

export default Signatures;
