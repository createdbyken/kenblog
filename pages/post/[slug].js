import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/layout.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs';





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
            body = []
        } = props

        const serializers = {
            types: {
              code: props => (
                <SyntaxHighlighter data-language={props.node.language}  style={atomOneDarkReasonable}>
                  {props.node.code}
                </SyntaxHighlighter>
              )
            }
          }

    return (
        <Layout>
            <article>
                <div className={styles.container}>
                    <figure>
                        <img 
                        width={600}
                        height={500}
                        layout="responsive"
                        alt={title} 
                        src={urlFor(mainImage).url()} />
                    </figure>
                    <h1 className={utilStyles.headingXl}>{title}</h1>
                    {categories && (
                        <ul className="inline-flex my-3">
                            Categoría:
                            {categories.map(category => 
                            <li key={category}>
                               <span className="mx-2 items-center justify-center px-2 py-1 text-xs font-bold  text-indigo-100 bg-blue-700 rounded">{category}</span> 
                            </li>)}
                        </ul>
                    )}
                    <BlockContent                
                         blocks={body}
                         imageOptions={{fit: 'max'}}
                         {...client.config()}
                         serializers={serializers}
                    />
                </div>
            </article>
            
            <div className={styles.container}>
                <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    {authorImage && (
                            <div>
                                <img 
                                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
                                width="300"
                                height="300"
                                alt={name}
                                src={urlFor(authorImage)
                                .url()}
                                />
                            </div>
                        )}
                    <div className="md:pt-20 md:p-8 text-center md:text-left space-y-4">
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                                <span>Escrito por {name}</span>
                            </div>
                            <div className="text-blue-700">
                                Mexican Software Engineer 🇲🇽 💻
                            </div>
                        </figcaption>
                        <style dangerouslySetInnerHTML={{__html: ".bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#000 !important;background-color:#FFDD00 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 23px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;opacity: 0.85 !important;color:#000 !important;}" }} /><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" /><a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/5qKiMrbdl" rel="noopener"><img width={27} height={32} layout="responsive" src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" /><span style={{marginLeft: '5px'}}>Invitame un café</span></a>
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
    mainImage,
    "authorImage": author->image,
    body,
}`

Post.getInitialProps = async function(context) {
    
    const {slug = ""} = context.query
    return await client.fetch(query, { slug })
}

export default Post