
export default function Card({src, title, href }) {
    return(
        <div className="relative cursor-pointer border">
            <a target="_blank" href={href}><img className="rounded" src={src} /></a>
            <div className="overlay w-full h-24 px-4 pt-8 border-t">
                <div className="text-black text-lg">{title}</div>
            </div>
        </div>
    );
};
