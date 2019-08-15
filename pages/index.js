import Link from 'next/link';
import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';
import { Button } from '../components/Button';

function Index() {
  return <Layout>
    <div className="container home-container">
      <div className="home-banner">
        <h1>
          <span className="accent-color">vasil </span>
          rimar
        <span className="accent-color">.</span>
        </h1>
        <p>Software developer from Toronto</p>
        <p>Currently working with <span className="accent-color">b3Intelligence</span></p>
        <div className="home-banner-footer">
          <Button href="/contact">Say hello</Button>
          <SocialIcons />
        </div>
      </div>
    </div>
  </Layout>
}

export default Index;
