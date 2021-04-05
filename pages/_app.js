import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx) => {
  console.log(process.env.MY_CDN);
  return { }
}

export default MyApp
