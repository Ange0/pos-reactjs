import { useContext, useEffect,useState } from "react";
import { StateScreenTabletContext } from "../utils/contexts";
import { sleep } from "../utils/helpers";

export default function ScreenBlack() {
    const {screenIsOn} = useContext(StateScreenTabletContext)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        async function fillInLoadingField() {
            if(screenIsOn) {
                setLoading('Opening...')
            } 
            if(loading && !screenIsOn) {
                setLoading('closing...')
                await  sleep(6000)
                setLoading(null)
            }
        }
        fillInLoadingField()
    }, [screenIsOn, loading])
    return (
        <>
            {/* screen black two params for hidden screen z-index and opacity */} 
            <div className={`flex items-center justify-center bg-black w-full h-full absolute ${screenIsOn ? 'z-[-2]': 'z-[20]'} rounded-[24px] ${screenIsOn ? 'opacity-0': 'opacity-100'}  tansition-all duration-[3000ms] oveflow-hidden`}>
                <div className={`bg-white opacity-5 w-40 h-[2000px] absolute rotate-[20deg] -top-48 -left-[30rem] ${!loading && !screenIsOn && 'animate-shine'}`}>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-2xl">{loading && 'SP'}</span>
                    <span className="text-xs">{ loading && loading}</span>
                </div>
            </div> 
        {/* screen black */}
        </>
    );
}