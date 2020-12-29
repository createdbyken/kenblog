import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {

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
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
						</small>
				  </li>
				))}
				</ul>
			</section>
		</Layout>
	)	
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
	  props: {
		allPostsData
	  }
	}
}
