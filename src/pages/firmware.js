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
  const FirmwareList = [
    {
      model: "D1",
      version: "v5.0.build20230705-1826",
      href: "https://m.combway.com/firmware/OpenQuick-BLANK-v5.0.build20230705-1826-iot-7621-d1-squashfs-sysupgrade.web.bin",
      notes: [
        "Impove network stablity.",
        "Upgrade to upstream lastest version.",
      ],
    },
  ];
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className="container">
        <h1 className="margin-top--lg">Firmwre</h1>
        <div className="row">
          {FirmwareList.map((props, idx) => (
            <div className="col">
              <DeviceFirmware key={idx} {...props} />
            </div>
          ))}
          <div className="col"></div>
        </div>
      </main>
    </Layout>
  );
}
