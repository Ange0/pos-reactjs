import { useContext, useEffect, useState } from "react"
import { CartContext, ResetProductContext } from "../utils/contexts"

export default function ProductItem({productProps}) {
    const [showOverlay, setShowOverlay] = useState(false)
    const {cart, setCart} = useContext(CartContext)
    const {productToReset, setProductToReset} = useContext(ResetProductContext)
    const [qty, setQty] = useState(0)
    
   function handleIncreaseQtyProduct(productParam) {
        const nextQty = qty + 1
        setQty(nextQty)
        
        let newCart = [...cart]
        const producIndex = newCart.findIndex((product) => product.id === productParam.id)

        if (producIndex === -1) {
            productParam.qty = nextQty
            newCart = [productParam, ...newCart]
        } else {
            newCart[producIndex].qty = nextQty 
        }
        
        setCart(newCart)
    }  

    function handleDecreaseQtyProduct(productParam) {
        if (qty > 0) {
            const prevQty = qty - 1
            setQty(prevQty)
            const newCart = [...cart]

            const producIndex = newCart.findIndex((product) => product.id === productParam.id)
            // found product with qty 1
            if (qty === 1 && producIndex !== -1 ) {
                // remove product
                newCart.splice(producIndex, 1)
                return setCart(newCart)
            }

            newCart[producIndex].qty = prevQty

            setCart(newCart)
        }
    }

    useEffect(() => {
        //match product to rese
        if(productToReset && productProps.id === productToReset.id) {
            setQty(0)
            setProductToReset(null)
        }
        // force update  qty : util when product exist in cart  and you come from another tab (e.g.: noodles to Burger)
        if (cart.length) {
           cart.forEach((productInCart) => {
                if (productInCart.id === productProps.id) {
                    setQty(productInCart.qty)
                }
           })
        }
        
    }, [productToReset, cart,productProps,setProductToReset])

    return (
        <>
            <div onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)} className="flex flex-col space-y-2 col-span-1 bg-[#2d2d2d] p-2 rounded-lg relative">
                <div className="h-40 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${productProps.urlImage})`}}  alt="burger-asiatique"></div>
                <div className="flex items-center">
                    <span className="text-sm">{productProps.name} |</span>
                    <span className="ml-2 text-stone-400 text-[10px]">{productProps.note}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold">{`${productProps.devise} ${productProps.price}`} </span>
                    <span className="text-[10px]">{productProps.available} item(s)</span>
                </div>
                <div className={`flex flex-col space-y-8 bg-[#f05756]/90 absolute left-0 ${showOverlay ? 'h-4/5 opacity-100' : ' h-0 opacity-0 z-[-2]'} delay-500 duration-300 transition-all ease-in-out bottom-0 w-full rounded-lg p-2`}>
                    <span className="text-xl">{productProps.name} </span>
                    <span className="font-bold text-2xl">{`${productProps.devise} ${productProps.price * qty}`}</span>
                    <div className="flex justify-center space-x-8 items-center">
                        <div onClick={() => handleDecreaseQtyProduct(productProps)} className="flex items-center justify-center h-10 w-10 rounded-xl border border-white bg-white text-stone-700 hover:opacity-60 transition">-</div>
                        <span className="text-4xl">{qty}</span>
                        <div onClick={() => handleIncreaseQtyProduct(productProps)} className="flex items-center justify-center h-10 w-10 rounded-xl border border-white bg-white text-stone-700 hover:opacity-60 transition">+</div>
                    </div>
                </div>
            </div>
        </>
    )
}