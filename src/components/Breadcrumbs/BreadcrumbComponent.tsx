import { Breadcrumb, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export interface Props {
  page: string;
}

function BreadcrumbComponent(props: Props): JSX.Element {
  return (
    <div className="breadcrumbs">
      <Container>
        <Breadcrumb
          className="breadcrumb1 animated wow slideInLeft"
          data-wow-delay=".5s"
        >
          <Breadcrumb.Item>
            <Link to="/">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              &nbsp; Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
}

export default BreadcrumbComponent;
