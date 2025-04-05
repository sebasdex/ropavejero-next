import Link from 'next/link'
function CollectionBanner() {
    return (
        <section className="w-full my-12 py-12 px-6 bg-black text-white max-w-screen-2xl mx-auto flex flex-col items-center gap-6">
            <p className="text-sm font-medium tracking-wider uppercase text-center">
                Explora más estilos en nuestra colección completa
            </p>
            <Link
                href="/collection"
                className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold uppercase hover:bg-black hover:text-white hover:border-white transition-all duration-300"
            >
                Ver colección
            </Link>
            <div className="w-16 h-px bg-white opacity-30"></div>
        </section>
    )
}

export default CollectionBanner