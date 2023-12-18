import React from "react";
import { Layout } from "../components/Layout";
import { SocialIcons } from "../components/SocialIcons";
import { Button } from "../components/Button";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <div className="container home-container">
        <div className="home-banner">
          <h1>
            <span className="accent-color">vasil </span>
            rimar
            <span className="accent-color">.</span>
          </h1>
          <p>Software developer from Toronto</p>
          <p>
            Currently working with{" "}
            <span className="accent-color">b3Intelligence</span>
          </p>
          <div className="home-banner-footer">
            <Link href="/contact">
              <Button>Say hello</Button>
            </Link>
            <SocialIcons />
          </div>
        </div>
      </div>
    </Layout>
  );
}
