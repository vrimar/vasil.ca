import Link from 'next/link';
import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';

function Index() {
  return <Layout>
    <div className="container home-container">
      <div className="home-banner">
        <h1>
          <span className="accent-color">vasil </span>
          rimar
        <span className="accent-color">.</span>
        </h1>
        <p>Front-end developer from Toronto.</p>
        <p>Currently working with <span className="accent-color">b3Intelligence</span></p>
        <div className="home-banner-footer">
          <a className="btn" href='/contact'>Say Hello</a>
          <SocialIcons />
        </div>
      </div>
    </div>
  </Layout>
}

export default Index;
