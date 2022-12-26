import { IdCurrentCategoryContext, StateScreenTabletContext } from "../utils/contexts";
import CalculateSide from "./CalculateSide";
import Categories from "./Categories";
import LedButton from "./LedButton";
import Modal from "./Modal";
import NavBar from "./NavBar";
import PowerButton from "./PowerButton";
import Products from "./Products";
import ScreenBlack from "./ScreenBlack";
import SideBar from "./SideBar";
import {useState}from "react";

function Tablet() {
    const [screenIsOn, setScreenIsOn] = useState(false)
    const [idCurrentCategory, setIdCurrentCategory] = useState(1)

    return (
        <>
            <StateScreenTabletContext.Provider value={{screenIsOn, setScreenIsOn}}>
                <div  className="flex-none w-[1080px] relative text-stone-200 cursor-[url('cursor.png'),auto]">
                    <PowerButton />
                    <img className="w-full h-full" src="/tablet.svg" alt="tablette"/>
                    <div className="absolute w-full h-full top-0 pb-1 p-2">
                        {/* screen */}
                        <div className={`bg-black w-full h-full rounded-[24px] relative overflow-hidden shadow-[0px_20px_60px_-15px_rgba(0,0,0,0.3)] ${screenIsOn ? 'shadow-cyan-500/50':'shadow-black/50'} duration-[4000ms] transition-all`}>
                            <ScreenBlack />
                            <Modal />
                            <LedButton />
                            <div className="grid grid-cols-12 h-full p-3">
                                <div className="col-span-8 h-full overflow-hidden bg-[#111315] rounded-tl-xl rounded-bl-xl">
                                    <NavBar />
                                    <div className="grid grid-cols-12 gap-4 h-full">
                                        <SideBar />
                                        <IdCurrentCategoryContext.Provider value={{idCurrentCategory, setIdCurrentCategory}}>
                                            <div className="flex flex-col space-y-8 col-span-10">
                                                <Categories/>
                                                <Products />
                                            </div>
                                        </IdCurrentCategoryContext.Provider>
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
            </StateScreenTabletContext.Provider>
        </>
    );
}

export default Tablet;