import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-3">
      <h3 className="text-warning">
        {props.titleName ? props.titleName : " "}
      </h3>
      <ul className="list-unstyled  mt-4">
        {props.MenuItem.map((item) => (
          <li className="text-decoration-none">
            <Link to={item.link} className="footerMenu text-decoration-none">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCol;
