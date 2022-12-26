export default function SwitchButtonSideBar({onClick}) {
    return (
        <>
            <div onClick={onClick} className="p-1 bg-white text-[#2d2d2d] rounded-full absolute -right-2 top-[12rem] z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg> 
            </div>  
        </>
    );
}
