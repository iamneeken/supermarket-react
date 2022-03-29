import React from 'react'

import ContactForm from '../components/ContactForm/ContactForm'

function Contact():JSX.Element {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
            <li className="active">Contact</li>
          </ol>
        </div>
      </div>

      <ContactForm />
    </>
  )
}

export default Contact