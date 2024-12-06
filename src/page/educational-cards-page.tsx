import { useState } from "react";

interface EducationalCardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  humain: string;
  ocean: string;
  interestingFacts: string[];
}

const educationalCards: EducationalCardData[] = [
  {
    id: 1,
    title: "Le Cœur et les Courants Marins",
    description: "Comparaison entre la circulation sanguine et la circulation océanique.",
    imageUrl: "https://images.unsplash.com/photo-1502813514270-9fed4f4900aa?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Le cœur pompe le sang, alimentant les organes en oxygène et en nutriments à travers un système de veines et d'artères.",
    ocean:
      'La circulation thermohaline, aussi appelée "ceinture transporteur océanique", est un réseau global de courants marins qui redistribuent la chaleur et les nutriments à travers les océans.',
    interestingFacts: [
      "Le Gulf Stream transporte des eaux chaudes depuis les tropiques jusqu'en Europe, influençant le climat.",
      "Une perturbation de la circulation thermohaline pourrait ralentir ces courants, entraînant des changements climatiques globaux.",
    ],
  },
  {
    id: 2,
    title: "Les Poumons et les Échanges Gazeux de l'Océan",
    description: "Comparaison entre la respiration humaine et les échanges gazeux océaniques.",
    imageUrl: "https://images.unsplash.com/photo-1719163363742-cd2637b67311?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Les poumons assurent l'échange de gaz en absorbant de l'oxygène et en rejetant du CO2.",
    ocean: "Les océans absorbent environ 30% du CO2 émis par les activités humaines.",
    interestingFacts: [
      "Le phytoplancton produit plus de 50% de l'oxygène que nous respirons.",
      "L'absorption de CO2 rend les océans plus acides, affectant les coquillages et les coraux.",
    ],
  },
  {
    id: 3,
    title: "Le Squelette et les Récifs Coralliens",
    description: "Comparaison entre le squelette humain et les structures des récifs coralliens.",
    imageUrl: "https://images.unsplash.com/photo-1621775595317-4de3a6646c6c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Le squelette fournit une structure solide pour soutenir le corps et protéger les organes.",
    ocean: "Les récifs coralliens soutiennent environ 25% de la vie marine.",
    interestingFacts: [
      "Les récifs coralliens protègent les côtes contre l'érosion en absorbant l'énergie des vagues.",
      "Ils sont gravement menacés par le blanchissement causé par le réchauffement des océans.",
    ],
  },
  {
    id: 4,
    title: "La Peau et la Surface Océanique",
    description: "Comparaison entre la peau humaine et la surface des océans.",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "La peau agit comme une barrière protectrice, régulant la température corporelle via la transpiration.",
    ocean: "La surface de l'océan échange constamment de la chaleur avec l'atmosphère, contribuant à la régulation du climat global.",
    interestingFacts: [
      "Les événements El Niño montrent comment une augmentation de la température de surface de l'océan Pacifique peut perturber les systèmes climatiques mondiaux.",
      "La température de surface de l'océan influence les cyclones tropicaux et la formation de tempêtes.",
    ],
  },
  {
    id: 5,
    title: "Les Reins et la Salinité de l'Océan",
    description: "Comparaison entre la fonction rénale et la régulation de la salinité océanique.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1726072356923-bf1a9f8faeb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Les reins filtrent les toxines et régulent l'équilibre des sels et des fluides dans le corps.",
    ocean: "La salinité joue un rôle clé dans la densité de l'eau, influençant les courants océaniques et la circulation globale.",
    interestingFacts: [
      "Une diminution de la salinité, causée par la fonte des glaciers, pourrait affaiblir la circulation thermohaline.",
      "Les régions comme la mer Baltique ont une faible salinité, tandis que la mer Rouge est l'une des plus salées.",
    ],
  },
  {
    id: 6,
    title: "Le Système Immunitaire et le Plancton",
    description: "Comparaison entre le système immunitaire et le rôle du plancton dans l'écosystème marin.",
    imageUrl: "https://images.unsplash.com/photo-1536625637853-ec02b2b4edbd?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Le système immunitaire protège le corps contre les pathogènes.",
    ocean:
      "Le plancton, à la base de la chaîne alimentaire marine, joue un rôle crucial en nourrissant de nombreuses espèces et en soutenant l'écosystème global.",
    interestingFacts: [
      "Une baisse significative du plancton due à la hausse des températures pourrait provoquer l'effondrement des écosystèmes marins.",
      "Le plancton est également un acteur clé dans la séquestration du CO2.",
    ],
  },
  {
    id: 7,
    title: "Le Cerveau et les Écosystèmes Interconnectés",
    description: "Comparaison entre le cerveau humain et l'interconnexion des écosystèmes océaniques.",
    imageUrl: "https://images.unsplash.com/photo-1649347173558-a305d7b8ff98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    humain: "Le cerveau orchestre et coordonne toutes les fonctions vitales du corps.",
    ocean: "Les écosystèmes océaniques interconnectés assurent la stabilité environnementale nécessaire à la vie.",
    interestingFacts: [
      "Les zones mortes dans les océans, causées par l'eutrophisation, montrent comment une perturbation peut avoir un effet domino sur tout l'écosystème.",
      "Les mangroves et les herbiers marins agissent comme des zones tampons, protégeant les écosystèmes voisins.",
    ],
  },
];

interface EducationalCardProps {
  title: string;
  description: string;
  imageUrl: string;
  humain: string;
  ocean: string;
  interestingFacts: string[];
}

const EducationalCard: React.FC<EducationalCardProps> = ({ title, description,imageUrl, humain, ocean, interestingFacts }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white w-2/4 shadow-lg rounded-lg p-6 mb-6">
      <div className="flex justify-between">
        <div className="flex flex-row justify-between gap-8">
            <div>

          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <div className="h-1 w-16 bg-primary-light mb-3"></div>
          <p className="text-gray-700">{description}</p>
          <button className="text-blue-500 mt-4" onClick={() => setIsExpanded(!isExpanded)}>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 transition-all ease-in-out duration-200 ${isExpanded ? 'rotate-[-180deg]' : ''}`}
            >
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />

            </svg>
        </button>
            </div>
          <img className="h-72 rounded-3xl" src={imageUrl} />
        </div>
        
      </div>
      {isExpanded && (
        <div>
          <div className="px-8 py-4">
            <h2 className="text-lg">Corps Humain 👨</h2>
            <p>{humain}</p>
          </div>
          <div className="px-8 py-4">
            <h2 className="text-lg">Ocean 🌊</h2>
            <p>{ocean}</p>
          </div>
          <div className="mt-4 text-gray-600">
            <h3 className="font-semibold">Faits intéressants :</h3>
            <ul className="list-disc ml-6">
              {interestingFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

const EducationalCardsPage: React.FC = () => {
  return (
    <div>
      <div className="bg-[#efefef] flex flex-col items-center gap-6 px-8 py-12 max-lg:px-6 max-md:px-4 max-lg:py-6">
        {educationalCards.map((card) => (
          <EducationalCard
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            humain={card.humain}
            ocean={card.ocean}
            interestingFacts={card.interestingFacts}
          />
        ))}
      </div>
    </div>
  );
};
export default EducationalCardsPage;
