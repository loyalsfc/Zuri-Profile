
function Home({id, href, linkText}){
    return(
        <a id={id} href={href} className="block bg-[#EAECF0] py-6 text-center font-medium font-sm mb-6">{linkText}</a>
    )
}

export default Home 