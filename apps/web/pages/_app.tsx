import { AppProps } from 'next/app';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { createContext } from 'react';

const globalStyle = css`
    :root {
        --dark-1: #0d1b2a;
        --dark-2: #1b263b;
        --dark-3: #415a77;
        --dark-4: #778da9;
        --dark-5: #e0e1dd;

        --light-1: #bdfffd;
        --light-2: #9ffff5;
        --light-3: #7cffc4;
        --light-4: #6abea7;
        --light-5: #5e6973;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Global styles={globalStyle} />
            <Component {...pageProps} />
        </>
    );
}

export default App;
