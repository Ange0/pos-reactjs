import { useContext, useEffect, useState } from "react"
import { CartContext } from "../utils/contexts"

export default function OrderRecap() {
    const {cart} = useContext(CartContext)
    const [subTotal, setSubTotal] = useState(0)
    const tax = 10

    useEffect(() => {
        console.log(cart)
        let totalCalulated = 0
        if (cart.length) {
            cart.forEach((product) => {
                totalCalulated = totalCalulated + (product.price * product.qty)
            })
        }
        setSubTotal(totalCalulated)
    }, [cart])

    return(
        <>
            <div className="flex flex-col justify-between flex-grow bg-[#2d2d2d] p-4 rounded-md transition-all duration-500 delay-200 ease-in-out overflow-hidden">
                <div className={`flex flex-col ${cart.length ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-40'} delay-200  space-y-4 duration-1000 transition-all text-sm `}>
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$ {subTotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax {tax}%</span>
                        <span>${(subTotal* tax) / 100}</span>
                    </div>
                    <div className="py-4 text-2xl border-t border-dotted">
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span>${((subTotal* tax) / 100) + subTotal}</span>
                        </div>
                    </div>
                </div>
                <div  className={`flex flex-col ${cart.length ? 'opacity-0' : 'opacity-100'} duration-200 delay-200  text-xs items-center justify-center text-stone-400 transition`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span>No product added</span>    
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                    <div className="text-stone-200 text-sm">Payment Method</div>
                        {/* items method */}
                        <div className="flex space-x-4 text-xs">
                            <div className="flex  flex-col items-center space-y-2">
                                <div className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-stone-800 -pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </div>
                                <span>Cash</span>
                            </div>
                            <div className="flex  flex-col items-center space-y-2">
                                <div className="border border-white rounded-md px-6 py-2 hover:bg-red-200 hover:text-stone-800 -pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>  
                                </div>
                                <span>Card</span>
                            </div>
                            <div className="flex  flex-col items-center space-y-2">
                                <div className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-stone-800 -pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                </svg>
                                </div>
                                <span>Wallet</span>
                            </div>
                        </div>
                        {/* items method */}
                    </div>
                    <div className="bg-white w-full rounded-full py-2 px-4 text-center text-black">
                        Place order
                    </div>
                </div>
            </div>
        </>
    )
}