import '../styles/globals.css';

import AppProviders from '../context/';

function MyApp({ Component, pageProps }) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
