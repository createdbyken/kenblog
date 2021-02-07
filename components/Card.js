
export default function Card({src, title, href }) {
    return(
        <div className="relative cursor-pointer">
            <a target="_blank" href={href}><img className="rounded" src={src} /></a>
            <style jsx>{`
            .overlay {
                background: linear-gradient(0deg, #6666, transparent);
            }
            `}</style>
            <div className="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
                <div className="text-white text-lg">{title}</div>
            </div>
        </div>
    );
};
