import { useContext } from "react";
import { CurrentMethodPaymentContext } from "../utils/contexts";
export default function PaymentMethodButton({children, methodPayment}) {
    const {currentMethodPayment, setCurrentMethodPayment} = useContext(CurrentMethodPaymentContext)
    return (
        <>
            <div onClick={() =>  setCurrentMethodPayment(methodPayment)} className="flex  flex-col items-center space-y-2">
                <div className={`border border-white ${currentMethodPayment === methodPayment && 'bg-white text-black' } rounded-md px-6 py-2 hover:bg-white hover:text-stone-800 hover:opacity-60 transition duration-200`}>
                    {children}
                </div>
                <span>{methodPayment}</span>
            </div>
        </>
    )
}