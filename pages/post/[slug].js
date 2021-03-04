import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const Post = (props) =>  {
    const {
            title = 'Missing title',
            name = 'Missing name',
            categories,
            authorImage,
            mainImage,
            body = [],
        } = props
    return (
        <Layout>
            <article>
                <div className={styles.container}>
                    <h1 className={utilStyles.headingXl}>{title}</h1>
                    {categories && (
                        <ul className="inline">
                            Categoría:
                            {categories.map(category => 
                            <li key={category}>
                               <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">{category}</span> 
                            </li>)}
                        </ul>
                    )}
                    <BlockContent                
                        blocks={body}
                        imageOptions={{fit: 'max'}}
                        {...client.config()}
                    />
                </div>
            </article>
            
            <div className={styles.container}>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    {authorImage && (
                            <div>
                                <img 
                                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                                width="384"
                                height="512"
                                alt={name}
                                src={urlFor(authorImage)
                                .url()}
                                />
                            </div>
                        )}
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                <span>Escrito por {name}</span>
                            </div>
                            <div className="text-gray-500">
                                Mexican Software Engineer 🇲🇽 💻
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </Layout>
    )
}

const query = groq ` *[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "mainImage": image.asset->url,
    "authorImage": author->image,
    body
}`

Post.getInitialProps = async function(context) {
    
    const {slug = ""} = context.query
    return await client.fetch(query, { slug })
}

export default Post