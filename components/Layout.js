import React from 'react';
import Head from 'next/head';
import Header from './Header';
import ReactGA from 'react-ga';

class Layout extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-146807687-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
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
      {this.props.children}
    </>;
  }
}

export default Layout;
