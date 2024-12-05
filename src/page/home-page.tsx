import Header from "../component/header"

function HomePage() {

    return (
        <div>
            <Header />
            <div className="flex flex-col gap-28 px-48 py-24">
                <div className="flex justify-between items-top overflow-hidden gap-36  text-primary-darker">
                    <div className="flex flex-col gap-8 justify-between">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl font-medium">
                                L’Océan : L’Artère de la Vie
                            </h2>
                            <div className="h-2 w-16 bg-primary-light"></div>
                        </div>
                        <div className="text-xl font-light">
                            <p>
                                Comme le sang irrigue nos veines, l’océan nourrit la vie sur Terre. Mais ses artères sont encombrées par la pollution et la surchauffe climatique.
                            </p>
                            <p>
                                Entrez dans un voyage numérique interactif, conçu pour sensibiliser et engager. Comprenez les menaces qui pèsent sur cet écosystème vital et découvrez les solutions innovantes qui peuvent redonner à l’océan sa force vive. Ensemble, réparons les artères de notre planète.
                            </p>
                        </div>
                        <button className="bg-primary rounded-3xl py-3 px-10 w-min">
                            <p className="text-nowrap text-white text-xl font-medium">
                                Plongez dans l’expérience
                            </p>
                        </button>
                    </div>
                    <img src="/ocean2.jpg" className="inline-block align-top object-cover w-auto h-auto max-w-96" />
                </div>
                <iframe className="w-full h-[166px]" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1974775595&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div className="text-sm"><a href="https://soundcloud.com/zigoto-503782691" title="Zigoto" target="_blank">Zigoto</a> · <a href="https://soundcloud.com/zigoto-503782691/sujetnuitinfo-2024-video-de" title="SUJETNUITINFO-2024---Vidéo de présentation R4W - Nuit de l&#x27;info" target="_blank">SUJETNUITINFO-2024---Vidéo de présentation R4W - Nuit de l&#x27;info</a></div>
            </div>
        </div>
    )
}

export default HomePage
