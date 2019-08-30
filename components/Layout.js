import '../styles/style.scss';
import Head from 'next/head';
import Header from './Header';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-146807687-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Layout(props) {
  return <>
    <Head>
      <title>Vasil Rimar -  Software Developer from Toronto</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
    </Head>
    <div className=" header-container container">
      <Header />
    </div>
    <div className="bg"></div>
    {props.children}
  </>;
}

export default Layout;
