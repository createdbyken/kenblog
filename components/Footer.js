export default function Footer(){
    return (
        <footer className=" flex flex-col px-8 py-0 bg-gray-200 md:px-8 md:py-4 md:flex-row justify-center items-center">
            <a
                href="https://github.com/mau5ken"
                className="px-3 py-3 mb-4 text-center text-gray-600 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3"
                target="_blank"
            >
                <i className="devicon-twitter-original"></i>

            </a>
            <a
                href="https://www.linkedin.com/in/kenrric-garcia/"
                className="px-3 py-3 mb-4 text-center text-gray-600 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3"
                target="_blank"
            >
                <i className="devicon-linkedin-plain"></i>

            </a>
            <a
                href="https://instagram.com/theken5/"
                className="px-3 py-3 mb-4 text-center text-gray-600 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3"
                target="_blank"
            >
                <img style={{height: "20px"}} src="https://res.cloudinary.com/craftwebs/image/upload/v1609704913/instagram-crl_kdfjsy.svg" alt="instagram"></img>
            </a>
            <a
                href="https://twitter.com/us3rGuy"
                className="px-3 py-3 mb-4 text-center text-gray-600 transition-colors duration-500 ease-in-out rounded-lg md:mr-4 md:ml-0 text-md md:text-md md:p-3"
                target="_blank"
            >
            <i className="devicon-twitter-original"></i>
        </a>
        </footer>
    )
}