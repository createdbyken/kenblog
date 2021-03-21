import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'



function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Blog = (props) => {
    const { posts = [] } = props
    const options = {year: "numeric", month: "short", day: "numeric"};
    return (
		<>		
            <div className="container mx-auto px-1 text-center py-20">
                <h2 className="mb-6 text-4xl font-bold text-center text-black">
                    Blogs Recientes
                </h2>
                
                <section className="container mx-auto px-6 p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {posts.map(
                            ({ 
                            _id, title = '', 
                            slug = '',
                             _createdAt = '', 
                             mainImage = '',
                             categories
                            }) =>slug && (
                                <div className="shadow-lg rounded-lg bg-white pb-5" key={_id} >
                                    {mainImage && (
                                        <div>
                                            <Link  href="/post/[slug]" as={`/post/${slug.current}`}>
                                                <img
                                                    className="rounded-t-lg cursor-pointer object-fill h-48 w-full" 
                                                    alt={mainImage}
                                                    src={urlFor(mainImage)
                                                    .url()}
                                                />
                                            </Link>
                                        </div>
                                    )}

                                    <div className="px-6 py-4 text-justify">
                                        <Link  href="/post/[slug]" as={`/post/${slug.current}`}>
                                            <div className="font-bold text-xl mb-2"><a className="text-xl antialiased text-gray-700 cursor-default">{title}</a></div>
                                        </Link>{' '}
                                        <p className="text-gray-700 text-base">
                                            <small className="antialiased text-gray-600">
                                                {new Date(_createdAt).toLocaleDateString("es-ES", options)}
                                            </small>
                                        </p>
                                    </div>
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