import Layout from '../components/Layout';

function Projects() {
  return <Layout>
    <div className="container project-container">
      <h2>Projects<span className="accent-color">.</span></h2>
      <div className="projects">
        <a className="project-item" href="https://github.com/vrimar/construct-ui" target="_blank">
          <div className="project-item-tag">Open Source</div>
          <div className="project-item-label">Construct-ui</div>
          <div className="project-item-content">A Mithril.js based UI library. Provides 40+ well tested components</div>
        </a>

        <a className="project-item" href="https://github.com/vrimar/mithril-portal" target="_blank">
          <div className="project-item-tag">Open Source</div>
          <div className="project-item-label">mithril-portal</div>
          <div className="project-item-content">Mithril component for rendering inline children to document.body</div>
        </a>

        <a className="project-item" href="https://pnhnetwork.ca" target="_blank">
          <div className="project-item-tag">Freelance</div>
          <div className="project-item-label">PNH Network</div>
          <div className="project-item-content">Brochue site for the Canadian PNH Network</div>
        </a>

        <a className="project-item" href="https://github.com/vrimar/mithril-transition-group" target="_blank">
          <div className="project-item-tag">Open Source</div>
          <div className="project-item-label">mithril-transition-group</div>
          <div className="project-item-content">A set of Mithril components for creating state/class based transitions</div>
        </a>

        <a className="project-item" href="https://willfix.ca" target="_blank">
          <div className="project-item-tag">Freelance</div>
          <div className="project-item-label">WillFix Inc.</div>
          <div className="project-item-content">GTA waterproofing, foundation and underpinning services website</div>
        </a>

        <a className="project-item" href="" target="_blank">
          <div className="project-item-tag">Design</div>
          <div className="project-item-label">UI kit</div>
          <div className="project-item-content"></div>
        </a>
      </div>
    </div>
  </Layout>
}

export default Projects;
