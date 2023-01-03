import { useContext } from "react";
import { CartContext } from "../utils/contexts";
import OrderRecap from "./OrderRecap";
import ProductsCart from "./ProductsCart";

export default function OrderSide() {
    const {cart} = useContext(CartContext)

    return (
        <>
            <div className="col-span-4 p-2 bg-[#1b1d20] rounded-tr-xl rounded-br-xl">
                <div className="flex flex-col space-y-8 h-full">
                    <div className="flex justify-between items-center">
                    <div className="relative" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:opacity-30 transition">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>      
                        <span className=" text-center  w-4 h-4 bg-white font-bold absolute text-black rounded-full top-0 -right-2 shadow text-[10px]">{cart.length}</span>
                    </div>
                    <div className="flex rounded-full pr-2 bg-[#2d2d2d] items-center space-x-2 border border-stone-400">
                        <span className="p-2 h-8 w-8 bg-[#f05756] rounded-full text-center text-xs text-black">A</span>
                        <span className="text-xs">Ange</span>
                    </div>
                    </div>
                    <div className="flex flex-col space-y-8 flex-grow h-full">
                        <ProductsCart />
                        <OrderRecap />
                    </div>
                </div>
            </div>
        </>
    );
}