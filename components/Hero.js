export default function Hero({portfolio}){
    return(
        <div className="py-32 hero-stn_12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl mb-2 black-white l-font_ppns">
                    Ken Sanchez
                </h2>
                <h3 className="text-xl mb-8 text-gray-500">
                    Software Engineer _ Web Developer
                </h3>                
            </div>
            <div className="grid justify-items-center">
                <div>
                    <svg className="animate-pulse w-6 h-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}