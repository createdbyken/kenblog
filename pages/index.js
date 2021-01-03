import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Hero from '../components/Hero'


export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Hero></Hero>

			<section className="container mx-auto px-6 p-10">
				<div className="flex items-center flex-wrap my-32">
					<div className="w-full md:w-1/2">
						<h1 className="text-5xl text-gray-800 mb-3">✌🏼 ¡Hola! Soy Ken, </h1>
						<p>
							soy un Fullstack developer y actualmente trabajo <a target="_blank" href="https://kingtide.com" className="cursor-pointer">@kingtide</a> 🌊.
						Empecé a programar cuando tenía 15 años, recuerdo que mi primer lenguaje de programación fue Ruby 💎 y posteriormente python 🐍. Tengo 23 años, soy Méxicano 🇲🇽 y vivo en <a href="" className="cursor-pointer">Tepoztlán, Morelos</a> ⛰. Mi pasión es ayudar a starups a crear plataformas web escalables y arquitectura solidas. ⛵️
						</p>
					</div>

					<div className="w-full md:w-1/2 grid justify-items-center">
						<img
							src="/images/profile.jpeg"
							className="md:object-scale-down md:h-96 md:w-96"
							alt="ken sanchez "
						/>
					</div>
				</div>

				<div className="flex items-center flex-wrap my-40">
					<div className="w-full md:w-1/2 px-4">
						<p 
							className="text-7xl md:text-8xl lg:text-9xl text-gray-800 mb-3 trns_text_blk">
							BACK<br />END
						</p>
						<div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mt-10">
							<div><i className="devicon-ruby-plain devIconStyleBlk"></i></div>
							<div><i className="devicon-python-plain devIconStyleBlk"></i></div>
							<div><i className="devicon-rails-plain devIconStyleBlk"></i></div>
							<div><i className="devicon-postgresql-plain devIconStyleBlk"></i></div>
							<div><i className="devicon-nodejs-plain devIconStyleBlk"></i></div>
							<div><i className="devicon-java-plain devIconStyleBlk"></i></div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-6">
						<p className="text-black text-2xl">
							Mi pasión por el backend comenzó a inicios de mis primeros años como developer. Diariamente me empujo a nuevas habilidades y retos que me ayudarán a ser un mejor Backend developer.
						</p>
					</div>
				</div>
			</section>

			<div className="flex items-center flex-wrap min-w-full bg-black">
				<div className="w-full md:w-1/2 order-last px-6">
					<p className="text-white text-2xl mt-10 mb-10">
						A lo largo de mi carrera he usado estas tecnologías de forma general en el desarrollo de proyectos con empresas. Complementar estas tecnologías con el modelo Backend me ha ayudado a tener habilidades más sólidas.
					</p>
				</div>
				<div className="w-full md:w-1/2 md:order-last px-4">
					<p className="text-7xl md:text-8xl lg:text-9xl mb-3 mt-10 trns_text_wht ">
						FRONT<br />END
					</p>
					<div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mt-10 mb-10">
						<div><i className="devicon-html5-plain devIconStyleWht"></i></div>
						<div><i className="devicon-css3-plain devIconStyleWht"></i></div>
						<div><i className="devicon-javascript-plain devIconStyleWht"></i></div>
						<div><i className="devicon-react-plain devIconStyleWht"></i></div>
						<div><i className="devicon-gatsby-plain devIconStyleWht"></i></div>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 ">
				<div className="container mx-auto px-6 text-center py-20">
					<h2 className="mb-6 text-4xl font-bold text-center text-black">
						Blogs Recientes
					</h2>

					<section>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
							{allPostsData.map(({ id, date, title }) => (
								<div className="shadow-lg rounded bg-white pt-5 pb-5" key={id}>
									<Link href={`/posts/${id}`}>
										<a className="text-xl antialiased text-gray-700	my-14">{title}</a>
									</Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
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