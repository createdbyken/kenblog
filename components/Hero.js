import Fade from "react-reveal/Fade"

export default function Hero(){
    return(
        <Fade bottom>
            <div className="py-32 hero-stn_12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl mb-2 black-white l-font_ppns">
                        Ken Sanchez
                    </h2>
                    <h3 className="text-xl mb-8 text-gray-500">
                        Software Engineer > Web Developer
                    </h3>                
                </div>
            </div>
        </Fade>
    )
}