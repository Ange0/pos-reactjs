export default function Products() {
    return (
        <>
            <div className="grid grid-cols-12 gap-2  max-h-[600px] overflow-auto mr-2">
                <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-lg relative transition">
                    <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                    <span className="text-sm">Burger Asiatique</span>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">$5.99 </span>
                        <span className="text-[10px]">11 items</span>
                    </div>
                    <div className="flex flex-col space-y-4 bg-[#f05756] absolute left-0 h-4/5 opacity-100 transition-all bottom-0 w-full rounded-lg p-2">
                        <span className="text-sm">Burger Asiatique</span>
                        <span className="font-bold">$5.99 </span>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white hover:opacity-60">-</div>
                            <span className="text-2xl">2</span>
                            <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white hover:opacity-60">+</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                    <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                    <span className="text-sm">Burger Asiatique</span>
                    <div className="flex justify-between items-center">
                    <span className="font-bold">$5.99 </span>
                    <span className="text-[10px]">11 items</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                    <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                    <span className="text-sm">Burger Asiatique</span>
                    <div className="flex justify-between items-center">
                    <span className="font-bold">$5.99 </span>
                    <span className="text-[10px]">11 items</span>
                    </div>
                </div>
               
            </div>
        </>
    );
}