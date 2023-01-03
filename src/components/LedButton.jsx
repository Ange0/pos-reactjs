import { useContext } from "react";
import { StateScreenTabletContext } from "../utils/contexts";

function LedButton() {
    const {screenIsOn} = useContext(StateScreenTabletContext)
    return (
        <>
            <div className={`${screenIsOn ? 'bg-green-500' : 'bg-red-500'} rounded-full absolute right-4 top-[0.4rem] h-1 w-1 z-[100] transition-all delay-[6000ms]`}></div>
        </>
    );
}

export default LedButton;