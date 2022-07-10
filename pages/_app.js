import '../styles/globals.scss'
import Layout from "../layout/layout"
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {

  return (
    <Layout>
        <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);
