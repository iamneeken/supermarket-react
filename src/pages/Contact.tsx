import React from "react";
import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";

import ContactForm from "../components/ContactForm/ContactForm";

function Contact(): JSX.Element {
  return (
    <>
      <BreadcrumbComponent page="Contact Us" />

      <ContactForm />
    </>
  );
}

export default Contact;
