
import { useContext } from "react";
import { methodsPayment } from "../utils/constants";
import { CartContext, OpenModalContext } from "../utils/contexts";
import PaymentMethodButton from "./PaymentMethodButton";

export default function PaymentMethod() {
    const {cart} = useContext(CartContext)
    const {setModalOpened} = useContext(OpenModalContext)

    return (
        <>
            <div className={`flex flex-col space-y-4 ${cart.length ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-20'} transition duration-500 delay-200`}>
                <div className="flex flex-col space-y-2">
                    <div className="text-stone-200 text-sm">Payment Method</div>
                    <div className="flex space-x-4 text-xs">
                        <PaymentMethodButton methodPayment={methodsPayment.cash}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </PaymentMethodButton>
                        <PaymentMethodButton methodPayment={methodsPayment.card}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>  
                        </PaymentMethodButton>
                        <PaymentMethodButton methodPayment={methodsPayment.wallet}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                            </svg>  
                        </PaymentMethodButton>
                    </div>
                </div>
                <div onClick={() => setModalOpened(true)} className="bg-white hover:bg-[#f05756] hover:text-white transition duration-500 w-full rounded-full py-2 px-4 text-center text-black">
                    Place order
                </div>
           </div>
        </>
    )
}