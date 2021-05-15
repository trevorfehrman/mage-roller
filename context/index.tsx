import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

import Head from 'next/head'
import { GoogleFonts } from 'next-google-fonts'

import { FirebaseAppProvider } from 'reactfire'
import NavBar from 'components/nav-bar'

const firebaseConfig = {
  apiKey: 'AIzaSyDhEhi-GDSUOy2Mv63GT304O9WD-9cQMoY',
  authDomain: 'mage-the-awakening.firebaseapp.com',
  projectId: 'mage-the-awakening',
  storageBucket: 'mage-the-awakening.appspot.com',
  messagingSenderId: '804455532498',
  appId: '1:804455532498:web:ec608e513b2e98b7afea0b',
  measurementId: 'G-81F6Y7BPDY',
}

function AppProviders({ children }) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          :root {
            --mage-green: hsl(142deg 32% 32%);
            --mage-green-dark: hsl(142deg 35% 16%);
            --mage-green-light: hsl(142deg 15% 55%);
            --mage-white: hsl(0deg 0% 91%);
            --mage-gray: hsl(0deg 0% 25%);
            --mage-grey: var(--mage-gray);
            --mage-gray-dark: hsl(0deg 0% 13%);
            --mage-grey-dark: var(--mage-gray-dark);
            --mage-gray-light: hsl(0 0% 35%);
            --mage-grey-light: var(--mage-gray-light);
            --background: hsl(0deg 0% 17%);
            --nav-gradient: linear-gradient(
              90deg,
              #356948,
              #497d5b,
              #5d916e,
              #72a682,
              #87bc97,
              #9dd2ac,
              #b3e8c2,
              #c9ffd8
            );
            font-family: 'Raleway', sans-serif;
          }

          html {
            font-size: 62.5%;
            background-color: var(--background);
            color: var(--mage-white);
          }

          body {
            font-size: 1.6rem;
          }

          nav {
            font-family: 'Eagle Lake', cursive;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            font-family: 'Eagle Lake', cursive;
          }

          button {
            display: inline-block;
            border: 1px solid var(--background);
            padding: 1rem 2rem;
            margin: 0;
            text-decoration: none;
            background: var(--mage-gray);
            color: var(--mage-white);
            font-family: sans-serif;
            font-size: 1rem;
            cursor: pointer;
            text-align: center;
            transition: background 250ms ease-in-out, transform 150ms ease;
            -webkit-appearance: none;
            -moz-appearance: none;
          }

          button:hover {
            background: var(--mage-green-light);
          }

          button:focus {
            background: var(--mage-gray-light);
            border: 1px solid var(--mage-green);
          }

          button:active {
            transform: scale(0.99);
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Raleway:wght@400;700&display=swap" />
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/* TODO: interpolate page title */}
          <title>Title goes here</title>
        </Head>
        <NavBar />
        {children}
      </FirebaseAppProvider>
    </>
  )
}

export default AppProviders
