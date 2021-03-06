import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import Date from '../components/date'


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Blog = (props) => {
    const { posts = [] } = props
	console.log(props)
    return (
		<>		
            <div className="container mx-auto px-6 text-center py-20">
                <h2 className="mb-6 text-4xl font-bold text-center text-black">
                    Blogs Recientes
                </h2>
                
                <section className="container mx-auto px-6 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {posts.map(
                            ({ _id, title = '', slug = '', _createdAt = '', mainImage = '' }) =>
                                slug && (
                                <div className="shadow-lg rounded bg-white pt-5 pb-5" key={_id} >
                                    {mainImage && (
                                        <div>
                                            <Link  href="/post/[slug]" as={`/post/${slug.current}`}>
                                                <img
                                                    className="rounded-t cursor-pointer" 
                                                    imageoptions={{fit: 'max'}}
                                                    alt={mainImage}
                                                    src={urlFor(mainImage)
                                                    .url()}
                                                />
                                            </Link>
                                        </div>
                                    )}

                                    <Link  href="/post/[slug]" as={`/post/${slug.current}`}>
                                        <a className="text-xl antialiased text-gray-700 my-14" >{title}</a>
                                    </Link>{' '}
                                    <br />
									<small className="antialiased text-gray-600">
                                        {_createdAt}
									</small>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </div>
		</>
    )
}

Blog.getInitialProps = async () => ({
	posts: await client.fetch(groq`
	  *[_type == "post" ]
	`)
  })

export default Blog