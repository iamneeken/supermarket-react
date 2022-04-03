import { faFacebookF, faTumblr } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneAlt,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="agileits_w3layouts_map_pos">
      <div className="agileits_w3layouts_map_pos1">
        <h3>Contact Info</h3>
        <p>1234k Avenue, 4th block, New York City.</p>
        <ul className="wthree_contact_info_address">
          <li>
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </i>
            +(0123) 232 232
          </li>
        </ul>
        <div className="w3_agile_social_icons w3_agile_social_icons_contact">
          <ul>
            <li>
              <a href="/" className="icon icon-cube agile_facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="icon icon-cube agile_facebook"
                />
              </a>
            </li>
            <li>
              <a href="/" className="icon icon-cube agile_rss">
                <FontAwesomeIcon
                  icon={faRss}
                  className="icon icon-cube agile_rss"
                />
              </a>
            </li>
            <li>
              <a href="/" className="icon icon-cube agile_t">
                <FontAwesomeIcon
                  icon={faTumblr}
                  className="icon icon-cube agile_t"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
