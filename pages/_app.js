import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import '../styles/global.css'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({Component, pageProps}){
    return (
        <Layout>
            <DefaultSeo {...SEO} />
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </Layout>
    )
}