import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Hero from '../components/Hero'
import Skills from'../components/Skills'


export default function Home({ allPostsData }) {
	return (
		<>
			<Hero></Hero>
			
			<Skills></Skills>
			
			<div className="bg-gray-100 ">
				<div className="container mx-auto px-6 text-center py-20">
					<h2 className="mb-6 text-4xl font-bold text-center text-black">
						Blogs Recientes
					</h2>

					<section className="container mx-auto px-6 p-10">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
							{allPostsData.map(({ id, date, title }) => (
								<div className="shadow-lg rounded bg-white pt-5 pb-5" key={id}>
									<Link href={`/posts/${id}`}>
										<a className="text-xl antialiased text-gray-700	my-14">{title}</a>
									</Link>
									<br />
									<small className="antialiased text-gray-600">
										<Date dateString={date} />
									</small>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
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