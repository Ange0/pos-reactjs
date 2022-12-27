import { useContext, useState } from "react";
import { CartContext, ResetProductContext } from "../utils/contexts";
export default function ProductsCart() {
    const [currentIdProduct, setCurrentIdProduct] = useState(null);
    const {setProductToReset} = useContext(ResetProductContext)
    const {cart, setCart} = useContext(CartContext)

    function removeProductInCart(productParam) {
       setCart(cart.filter(product => product.id !== productParam.id))
       setProductToReset(productParam)
    }

    return (
        <>
            <div className="flex flex-col max-h-60 space-y-4 overflow-auto">
                {
                    cart.map((productInCart) => 
                        <div key={productInCart.id} onMouseLeave={() => setCurrentIdProduct(null)} onClick={() => setCurrentIdProduct(productInCart.id)} className={`flex flex-none bg-stone-700 rounded-md relative p-2 h-14 text-xs overflow-hidden transition-all duration-200 ease-in-out }`}>
                            <div className={`flex justify-between bg-[#2d2d2d] p-2 rounded-md absolute ${currentIdProduct === productInCart.id ? 'left-14' :'left-0'} transition-all duration-500 delay-200 h-full top-0 w-full shadow-xl shadow-rose-500/50`}>
                                <div className="flex space-x-2">
                                    <div  className="h-full w-20 bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${productInCart.urlImage})`}}  alt="burger-asiatique"></div>
                                    <div className="flex flex-col justify-between">
                                    <div className="flex space-x-2">
                                        <span title="Double Burger sgsgsgsgsggssgsgsggsgsggsgsgs sgsssgggs gsgg" className="max-w-32 text-el truncate" >{productInCart.name}</span>
                                        <span>({productInCart.qty}X)</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-[10px]">
                                        <span className="h-1 w-1 rounded-full bg-stone-400"></span>
                                        <span className="text-stone-400">{productInCart.note}</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-end">
                                <span>${productInCart.price * productInCart.qty}</span>
                                </div>
                            </div>
                            <div className="self-center p-2" onClick={() => removeProductInCart(productInCart)}>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="w-5 h-5 " >
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>  
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}