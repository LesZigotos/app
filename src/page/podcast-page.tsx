
function PodcastPage() {
  return (
    <div className="h-full bg-gray overflow-scroll">
      <div className="flex flex-col gap-28 px-48 py-24 max-lg:px-20 max-md:px-4 max-lg:py-6">
        <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-8 justify-between items-top overflow-hidden gap-36  text-primary-darker">
          <div className="flex flex-col gap-8 justify-start max-lg:items-center w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl max-md:text-2xl font-medium">Podcast : L’Océan à cœur battant</h2>
              <div className="h-2 w-16 bg-primary-light"></div>
            </div>
            <div className="text-xl max-md:text-base max-md:text-center font-light">
              <p>
                Bienvenue dans "L’Océan à cœur battant", un podcast immersif et éducatif qui vous emmène au cœur des mystères fascinants de
                l’Océan. Inspiré par l’initiative révolutionnaire de la Fondation Race for Water, ce podcast explore les incroyables
                parallèles entre le corps humain et notre planète bleue.
              </p>
              <p>
                L’océan et le corps humain partagent bien plus qu’il n’y paraît. Tout comme notre organisme, l’Océan a ses propres systèmes
                vitaux : des courants marins qui agissent comme un système circulatoire, des récifs coralliens qui forment un squelette
                vivant, et des organismes microscopiques, le plancton, qui respirent pour toute la planète. Mais que se passe-t-il lorsque
                ces systèmes dysfonctionnent ? Quels sont les impacts sur notre planète… et sur nous-mêmes ?
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <iframe
              width="100%"
              height="600"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1974867219&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}
            >
              <a
                href="https://soundcloud.com/zigoto-503782691"
                title="Zigoto"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Zigoto
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/zigoto-503782691/jingle-podcast-locean-a-cur-battant"
                title="Jingle podcast L’Océan à cœur battant"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Jingle podcast L’Océan à cœur battant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastPage;
