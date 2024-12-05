
function Header() {

    return (
        <div className="px-4 bg-primary-darker flex justify-around max-lg:justify-between items-center h-20 max-md:h-16 w-full">
            <img src="logo.png" className="h-2/4" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-2/4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    )
}

export default Header
