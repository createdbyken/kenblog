import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import '../styles/global.css'
export default function App({Component, pageProps}){
    return (
        <Layout>
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </Layout>
    )
}