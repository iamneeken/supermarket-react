import CreateAccountForm from '../components/Create Account/CreateAccountForm'

function CreateAccount():JSX.Element {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                        <li>
                            <a href="index.html">
                                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                                Home
                            </a>
                            </li>
                        <li className="active">Register Page</li>
                    </ol>
                </div>
            </div>

            <CreateAccountForm />
        </>
    )
}

export default CreateAccount