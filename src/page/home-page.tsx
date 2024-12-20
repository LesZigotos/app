import { useNavigate } from "react-router-dom";
import Button from "../component/buton";

function HomePage() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex flex-col gap-28 px-48 py-24 max-lg:px-20 max-md:px-4 max-lg:py-6">
                <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-8 justify-between items-top overflow-hidden gap-36  text-primary-darker">
                    <div className="flex flex-col gap-8 justify-between max-lg:items-center">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl max-md:text-2xl font-medium">
                                L’Océan : L’Artère de la Vie
                            </h2>
                            <div className="h-2 w-16 bg-primary-light"></div>
                        </div>
                        <div className="text-xl max-md:text-base max-md:text-center font-light">
                            <p>
                                Comme le sang irrigue nos veines, l’océan nourrit la vie sur
                                Terre. Mais ses artères sont encombrées par la pollution et la
                                surchauffe climatique.
                            </p>
                            <p>
                                Entrez dans un voyage numérique interactif, conçu pour
                                sensibiliser et engager. Comprenez les menaces qui pèsent sur
                                cet écosystème vital et découvrez les solutions innovantes qui
                                peuvent redonner à l’océan sa force vive. Ensemble, réparons les
                                artères de notre planète.
                            </p>
                        </div>
                        <Button onClick={() => navigate('/quizz')} label="Plongez dans l’expérience" />
                    </div>
                    <img
                        src="/ocean2.jpg"
                        className="inline-block align-top object-cover w-auto h-auto max-w-96"
                    />
                </div>
                <iframe
                    className="w-full h-[166px]"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1974867219&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
            </div>
        </div>
    );
}

export default HomePage;
