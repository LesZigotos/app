import { useNavigate } from "react-router-dom"
import BurgerMenu from "./menu";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div className="px-4 bg-primary-darker flex justify-around max-lg:justify-between items-center h-20 max-md:h-16 w-full">
                <img onClick={() => navigate('/')} src="logo.png" className="h-2/4 cursor-pointer" />
                <button onClick={() => setOpen(true)} className="h-2/4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-full" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <BurgerMenu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Header
