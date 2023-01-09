import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body{
    background-color: #F5F5F5;
  }
  textarea{
    padding: 0;
    margin: 0;
    
  }
  a{
    cursor: pointer;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta key="viewport" name="viewport" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="東京農業大学、iGEMチームのTokyo AgriのWEBサイトです。私たちの活動や合成生物学についての情報を掲載しています。"
        />
        <title>Tokyo Agri</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
