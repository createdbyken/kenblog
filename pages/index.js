import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h1>✌🏼 ¡Hola! Soy Ken, </h1>
				<p>
				soy un Fullstack developer y actualmente vivo en la Ciudad de México. Empecé a programar cuando tenía 15 años, recuerdo que mi primer lenguaje de programación fue Ruby y posteriormente python, la verdad no entendía mucho pero me encantaba hacer pequeños programas y esa curiosidad fué creciendo cada vez más.
				</p>
			</section>
		</Layout>
	)
}
