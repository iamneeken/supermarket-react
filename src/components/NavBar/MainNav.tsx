import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const MainNav:React.FC =() => {
  return (
    <div className="logo_products">
      <div className="container">
        <div className="w3ls_logo_products_left1">
          <ul className="phone_email">
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                aria-hidden="true"
              ></FontAwesomeIcon>
              &nbsp; Order online or call us : (+0123) 234 567
            </li>
          </ul>
        </div>
        <div className="w3ls_logo_products_left">
          <h1>
            <Link to='/'>super Market</Link>
          </h1>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input
              type="search"
              name="Search"
              placeholder="Search for a Product..."
              required
            />
            <button
              type="submit"
              className="btn btn-default search"
              aria-label="Left Align"
            >
              <FontAwesomeIcon
                icon={faSearch}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </button>
            <div className="clearfix"></div>
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
}

export default MainNav;
