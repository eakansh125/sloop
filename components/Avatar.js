

function Avatar({url , className}) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img loading="lazy" src={url} className={`rounded-full h-10 cursor-pointer transition duration-150
        transform hover:scale-110" alt="avatar ${className}`} alt=""/>
    )
}

export default Avatar
