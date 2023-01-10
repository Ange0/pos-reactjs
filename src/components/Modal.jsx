import { useContext, useEffect } from "react";
import { OpenModalContext } from "../utils/contexts";
import ContentModePaymentModal from "./ContentModePaymentModal";

export default function Modal() {
    const {modalOpened, setModalOpened} = useContext(OpenModalContext)

    useEffect(() => {
        console.log(modalOpened)
    }, [modalOpened])
    return (
        <>
            {/* modal two params for hidden screen z-index and opacity */ }  
                <div className={`flex items-center justify-center backdrop-blur-md bg-black/25 w-full h-full absolute  
                    ${modalOpened ? 'z-[20] opacity-100' : 'z-[-2] opacity-0'} rounded-[24px] transition-all 
                    delay-100 duration-200 ease-[cubic-bezier(.1,-1.21,.55,1.37)]`}>
                    <div className={`flex flex-col space-y-4 ${modalOpened ? 'scale-90' : 'opacity-0' } opacity-100 transition-all delay-100 duration-200 ease-in  w-1/3 shadow border rounded-md p-4`}>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl">Pay Invoice </span>
                            <div className="bg-black/50 hover:opacity-80 p-2 rounded-full" onClick={() => setModalOpened(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <ContentModePaymentModal />
                    </div>
                </div> 
            {/* modal */}
        </>
    );
}