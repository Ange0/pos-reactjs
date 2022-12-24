import CalculateSide from "./CalculateSide";
import Categories from "./Categories";
import LedButton from "./LedButton";
import NavBar from "./NavBar";
import PowerButton from "./PowerButton";
import Products from "./Products";
import SideBar from "./SideBar";

function Tablet() {
    return (
        <>
            <div  className="flex-none w-[1080px] relative text-stone-200 cursor-[url('cursor.png'),auto]">
                <PowerButton />
                <img className="w-full h-full" src="/tablet.svg" alt="tablette"/>
                <div className="absolute w-full h-full top-0 pb-1 p-2">
                    {/* screen */}
                    <div className="bg-black w-full h-full rounded-[24px] relative overflow-hidden shadow-[0px_20px_60px_-15px_rgba(0,0,0,0.3)] shadow-black/50 duration-1000 transition-all">
                    {/* screen black two params for hidden screen z-index and opacity */} 
                         <div className="flex items-center justify-center bg-black w-full h-full absolute z-[-2] rounded-[24px] opacity-0  tansition-all duration-[3000ms] oveflow-hidden">
                            <div className="bg-white opacity-5 w-40 h-[2000px] absolute rotate-[20deg] -top-48  duration-700 left-[30rem] transition-all">
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                            <span className="text-2xl">Sall</span>
                            <span className="text-xs">Loading...</span>
                            </div>
                        </div> 
                    {/* screen black */}

                    {/* modal two params for hidden screen z-index and opacity */ }  
                        {/* <div className="flex items-center justify-center backdrop-blur-md bg-black/30 w-full h-full absolute z-[20] opacity-100 rounded-[24px] transition-all duration-400">
                            <div className="flex flex-col space-y-4   w-1/3 shadow-md rounded-md p-4 ">
                            <div className="flex justify-between">
                                <span>Title sjjsjs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="bg-red-300 p-2">
                                <p>Loremsjjjjdjdjd dhdhdhd dhdhd djddjd djdjj</p>
                                <p>Loremsjjjjdjdjd dhdhdhd dhdhd djddjd djdjj</p>
                                <p>Loremsjjjjdjdjd dhdhdhd dhdhd djddjd djdjj</p>
                                <p>Loremsjjjjdjdjd dhdhdhd dhdhd djddjd djdjj</p>
                                <p>Loremsjjjjdjdjd dhdhdhd dhdhd djddjd djdjj</p>
                            </div>
                            <div>
                                Footer
                            </div>
                            </div>
                        </div>  */}
                    {/* modal */}
                        <LedButton />
                        <div className="grid grid-cols-12 h-full p-3">
                        <div className="col-span-8 h-full overflow-hidden bg-[#111315] rounded-tl-xl rounded-bl-xl">
                            <NavBar />
                            <div className="grid grid-cols-12 gap-4 h-full">
                                <SideBar />
                                <div className="flex flex-col space-y-8 col-span-10">
                                    <Categories/>
                                    <Products />
                                </div>
                            </div>
                        </div>
                        <CalculateSide />
                        </div>
                        {/* tablet design  */}
                        <div className="flex justify-center w-full absolute bottom-8">
                            <div className="w-40 rounded-full h-[1.9px] bg-white"></div>
                        </div>
                        {/* tablet design  */}
                    </div>
                    {/* screen */}
                </div>
            </div>
        </>
    );
}

export default Tablet;