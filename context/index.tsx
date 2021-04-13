import * as React from 'react';

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyDhEhi-GDSUOy2Mv63GT304O9WD-9cQMoY',
  authDomain: 'mage-the-awakening.firebaseapp.com',
  projectId: 'mage-the-awakening',
  storageBucket: 'mage-the-awakening.appspot.com',
  messagingSenderId: '804455532498',
  appId: '1:804455532498:web:ec608e513b2e98b7afea0b',
  measurementId: 'G-81F6Y7BPDY',
};

function AppProviders({ children }) {
  return <FirebaseAppProvider firebaseConfig={firebaseConfig}>{children}</FirebaseAppProvider>;
}

export default AppProviders;
