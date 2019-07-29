import '../styles/style.scss';
import Head from 'next/head';
import Header from './Header';

function Layout(props) {
  return <>
    <Head>
      <title>Vasil Rimar</title>
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
