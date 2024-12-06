import { useNavigate } from "react-router-dom";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

function BurgerMenu(props: MenuProps) {
  const { open, onClose } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={onClose}
        role="presentation"
        data-open={JSON.stringify(open)}
        className={`top-0 left-0 bottom-0 right-0 bg-primary-darker bg-opacity-30 z-50 ${open ? "fixed" : "hidden"}`}
      />
      <nav
        data-open={JSON.stringify(open)}
        className={`flex flex-col gap-12 max-w-full h-screen bg-primary-dark text-white text-3xl font-medium text-left p-8 z-50 fixed top-0 right-0 transition-transform ease-in-out duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button onClick={onClose} className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex p-8 pe-16 flex-col gap-8 items-start">
          <button onClick={() => navigate("/")}>
            <p>Accueil</p>
          </button>
          <button onClick={() => navigate("/quizz")}>
            <p>Quizz</p>
          </button>
          <button onClick={() => navigate("/educational-cards")}>
            <p>Cartes éducatives</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
