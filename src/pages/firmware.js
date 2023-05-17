import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import DeviceFirmware from "@site/src/components/DeviceFirmware";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <p className="hero__title">Keep your device update.</p>
      </div>
    </header>
  );
}

export default function Firmware() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="container">
        <h1 className="margin-top--lg">Firmwre</h1>
        <div className="row">
          <div className="col">
            <DeviceFirmware
              model="ZT-RG1782PoE"
              version="v5.0.build20230511-1534"
              href="/docs/user"
              notes={[
                "Impove network stablity.",
                "Upgrade upstream to lastest version.",
              ]}
            />
          </div>
          <div className="col"></div>
        </div>
      </main>
    </Layout>
  );
}
