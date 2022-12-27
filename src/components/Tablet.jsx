import { CartContext, IdCurrentCategoryContext, ResetProductContext, StateScreenTabletContext } from "../utils/contexts";
import OrderSide from "./OrderSide";
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
    const [screenIsOn, setScreenIsOn] = useState(true)
    const [idCurrentCategory, setIdCurrentCategory] = useState(1)
    const [cart, setCart] = useState([])
    const [productToReset, setProductToReset] = useState(null);
    return (
        <>
            <StateScreenTabletContext.Provider value={{screenIsOn, setScreenIsOn}}>
                <CartContext.Provider value={{cart, setCart}}>
                    <ResetProductContext.Provider value={{productToReset, setProductToReset}}>
                        <div  className="flex-none w-[1080px] relative text-stone-200 cursor-[url('cursor.png'),auto]">
                            <PowerButton />
                            <img className="w-full h-full" src="/tablet.svg" alt="tablette"/>
                            <div className="absolute w-full h-full top-0 pb-1 p-2">
                                {/* screen */}
                                <div className={`bg-black w-full h-full rounded-[24px] relative overflow-hidden shadow-[0px_0px_40px_-15px_rgba(0,0,0,0.3)] ${screenIsOn ? 'shadow-white/50':'shadow-black/50'} duration-[4000ms] transition-all`}>
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
                                        <OrderSide />
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
                    </ResetProductContext.Provider>
                </CartContext.Provider>
            </StateScreenTabletContext.Provider>
        </>
    );
}

export default Tablet;