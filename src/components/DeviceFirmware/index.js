import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

export default function DeviceFirmware(props) {
  const { model, version, notes, href } = props;
  return (
    <div className="card shadow--md">
      <div className="card__header">
        <h2>{model}</h2>
        <h3>{version}</h3>
      </div>
      <div className="card__body">
        <ol>
          {notes.map((props, idx) => (
            <li key={idx}> {props} </li>
          ))}
        </ol>
      </div>
      <div className="card__footer">
        <Link className="button button--primary button--lg" to={href}>
          <Translate>Download</Translate>
        </Link>
      </div>
    </div>
  );
}
