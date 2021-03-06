import Fade from "react-reveal/Fade"

export default function Skills(){
    return (
        <>
            <Fade bottom>
                <section className="container mx-auto px-6 p-10">
                    <div className="flex items-center flex-wrap my-32">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-5xl text-gray-800 mb-3">✌🏼 ¡Hola! Soy Ken, </h1>
                            <p>
                                soy un Fullstack developer y actualmente trabajo <a target="_blank" href="https://kingtide.com" rel="noopener" className="cursor-pointer">@kingtide</a> 🌊.
                            Empecé a programar cuando tenía 15 años, recuerdo que mi primer lenguaje de programación fue Ruby 💎 y posteriormente python 🐍. Tengo 23 años, soy Méxicano 🇲🇽 y vivo en Tepoztlán, Morelos ⛰. Mi pasión es ayudar a starups a crear plataformas web escalables y arquitectura solidas. ⛵️
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 grid justify-items-center">
                            <img
                                src="/images/profile.jpeg"
                                className="md:object-scale-down md:h-96 md:w-96"
                                alt="ken sanchez "
                                layout="responsive"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </section>
            </Fade>
                
            <Fade bottom>
                <section className="lg:container mx-auto">
                    <div className="flex items-center flex-wrap min-w-full bg-white">
                        <div className="w-full md:w-1/2 px-4">
                            <p className="text-7xl md:text-8xl lg:text-9xl mb-3 mt-10 trns_text_blk md:ml-9">
                                BACK<br />END
                            </p>
                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mt-10 mb-10 text-center">
                                <div>
                                    <i className="devicon-ruby-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1"> Ruby</small>
                                </div>
                                <div>
                                    <i className="devicon-python-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1 ">Python</small>
                                </div>
                                <div>
                                    <i className="devicon-rails-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1 ">Ruby on Rails</small>
                                </div>
                                <div>
                                    <i className="devicon-postgresql-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1 "> PostgreSQL</small>
                                </div>
                                <div>
                                    <i className="devicon-nodejs-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1 ">Node.js</small>
                                </div>
                                <div>
                                    <i className="devicon-java-plain devIconStyleBlk"></i>
                                    <small className="block text-center py-1 ">Java</small>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-6">
                            <p className="text-black text-2xl mt-10 mb-10">
                            Mi pasión por el backend comenzó a inicios de mis primeros años como developer. Diariamente me empujo a nuevas habilidades y retos que me ayudarán a ser un mejor Backend developer.
                            </p>
                        </div>
                    </div>
                </section>
            </Fade>
            
            <Fade bottom>
                <section className="mx-auto">
                    <div className="flex items-center flex-wrap min-w-full bg-black mt-32">
                        <div className="w-full md:w-1/2 order-last px-6">
                            <p className="text-white text-2xl mt-10 mb-10">
                                A lo largo de mi carrera he usado estas tecnologías de forma general en el desarrollo de proyectos con empresas. Complementar estas tecnologías con el modelo Backend me ha ayudado a tener habilidades más sólidas.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 md:order-last px-4">
                            <p className="text-7xl md:text-8xl lg:text-9xl mb-3 mt-10 trns_text_wht md:ml-16">
                                FRONT<br />END
                            </p>
                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mt-10 mb-10 text-center">
                                <div>
                                    <i className="devicon-html5-plain devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">HTML5</small>
                                </div>
                                <div>
                                    <i className="devicon-css3-plain devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">CSS3</small>
                                </div>
                                <div>
                                    <i className="devicon-javascript-plain devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">Javascript</small>
                                </div>
                                <div>
                                    <i className="devicon-react-plain devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">React.js</small>
                                </div>
                                <div>
                                    <i className="devicon-gatsby-plain devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">Gatsby</small>
                                </div>
                                <div>
                                    <i className="devicon-sass-original devIconStyleWht"></i>
                                    <small className="block text-white text-center py-1">SASS</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}