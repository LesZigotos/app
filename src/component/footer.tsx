import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#020817] text-white py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Les Zigoto</h3>
            <p className="text-gray-400">
              © 2024-2025 Les Zigoto.
              <br />
              Tous droits réservés.
            </p>
          </div>

          {/* Internal Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => {
                    navigate("/quizz");
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  L&apos;Expérience
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/podcast");
                  }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Notre Podcast
                </a>
              </li>
              <li>
                <a href="https://www.raceforwater.org" className="text-gray-400 hover:text-white transition-colors">
                  RACE FOR WATER
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/LesZigotos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.nuitdelinfo.com/" className="text-gray-400 hover:text-white transition-colors">
                  Nuit de l'info 2024
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
