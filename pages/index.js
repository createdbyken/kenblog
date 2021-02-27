import Link from 'next/link'
import Date from '../components/date'
import Hero from '../components/Hero'
import Skills from'../components/Skills'
import groq from 'groq'
import client from '../client'


const Index = (props) => {
    const { posts = [] } = props
	console.log(props)
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
							{posts.map(
								({ _id, title = '', slug = '', _updatedAt = '' }) =>
									slug && (
									<div className="shadow-lg rounded bg-white pt-5 pb-5" key={_id} >
										<Link prefetch href="/post/[slug]" as={`/post/${slug.current}`}>
											<a className="text-xl antialiased text-gray-700 my-14" >{title}</a>
										</Link>{' '}
									</div>
								)
							)}
						</div>
					</section>
				</div>
			</div>
		</>
    )
}

Index.getInitialProps = async () => ({
	posts: await client.fetch(groq`
	  *[_type == "post" ]
	`)
  })

export default Index