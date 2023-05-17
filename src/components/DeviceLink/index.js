import React from "react";
import clsx from "clsx";

function Link({ model, href, imgurl }) {
  return (
    <div className="card shadow--md text--center">
      <a href={href}>
        <div className="card__image">
          <img src={imgurl} />
        </div>
        <div className="card__body">
          <h4>{model}</h4>
        </div>
      </a>
    </div>
  );
}

export default function DeviceLink(props) {
  return (
    <div className={clsx("col col--3")}>
      <Link {...props} />
    </div>
  );
}
