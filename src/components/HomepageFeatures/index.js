import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: translate({ message: "Easy Setup to Customize" }),
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <Translate id="index.easytouse">
        We provide carefully designed features from the ground up to be easily
        installed and used.
      </Translate>
    ),
  },
  {
    title: translate({ message: "Solid Infrastructure to Trust" }),
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <Translate id="index.focus">
        We build products based on the solid infrastructure wildly used.
      </Translate>
    ),
  },
  {
    title: translate({ message: "Ready Application to Use" }),
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <Translate id="index.solid">
        Your can reuse the exist applications to quickly make new function
        rotate.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
