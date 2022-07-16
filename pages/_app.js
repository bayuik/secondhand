import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  // return (
  //   <div>
  //     <Product />
  //   </div>
    
  // )
}

export default MyApp