import { useContext, useEffect, useRef, useState } from "react"
import { CartContext, TotalOrderContext } from "../utils/contexts"
import { sleep } from "../utils/helpers"
import PaymentMethod from "./PaymentMethod"

export default function OrderRecap() {
    const {cart} = useContext(CartContext)
    const [subTotal, setSubTotal] = useState(0)
    const {totalOrder, setTotalOrder} = useContext(TotalOrderContext)
    const tax = 10
    let valueTax = useRef(0)
    let [cartHasBeenModified, setCartHasBeenModified] = useState(false)

    useEffect(() => {
        async function pleaseLoading() {
            setCartHasBeenModified(true)
            await sleep(500)
            setCartHasBeenModified(false)
        }

        let totalCalulated = 0
        if (cart.length) {
            cart.forEach((product) => {
                totalCalulated = totalCalulated + (product.price * product.qty)
            })
            pleaseLoading()
        }

        setSubTotal(totalCalulated)
        valueTax.current = totalCalulated * tax / 100
        setTotalOrder(subTotal + valueTax.current)
        console.log("mouvement")
        console.log(cart)
    }, [cart, valueTax, setTotalOrder,subTotal])

    return(
        <>
            <div className="flex flex-col justify-between flex-grow bg-[#2d2d2d] p-4 rounded-md transition-all duration-500 delay-200 ease-in-out overflow-hidden">
                <div className={`flex flex-col ${cart.length ? 'opacity-100 translate-y-0 ' : 'opacity-0 -translate-y-10'} delay-200  space-y-4 duration-1000 transition-all text-sm `}>
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$ {subTotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax {tax}%</span>
                        <span>${valueTax.current}</span>
                    </div>
                    <div className="py-4 text-2xl border-t border-dotted">
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span className={`${cartHasBeenModified ? 'scale-[4]  opacity-0' : 'opacity-100'} transition duration-500`}>${totalOrder}</span>
                        </div>
                    </div>
                </div>
                <div  className={`flex flex-col ${cart.length ? 'opacity-0' : 'opacity-100'} duration-[2s] delay-500  text-xs items-center justify-center text-stone-400 transition hover:opacity-80`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span>No product added</span>    
                </div>
                <PaymentMethod />
            </div>
        </>
    )
}