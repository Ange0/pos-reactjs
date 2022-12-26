export default function CalculateSide() {
    return (
        <>
            <div className="col-span-4 p-4 bg-[#1b1d20] rounded-tr-xl rounded-br-xl">
                <div className="flex flex-col space-y-8 h-full">
                    <div className="flex justify-between items-center">
                    <div className="flex flex-col space-y-1" >
                        <span className="text-xl">Orders</span>
                        <span className="text-[10px]">number: 4</span>
                    </div>
                    <div className="flex rounded-full pr-2 bg-[#2d2d2d] items-center space-x-2 border border-stone-400">
                        <span className="p-2 h-8 w-8 bg-indigo-500 rounded-full text-center text-xs text-black">A</span>
                        <span className="text-xs">Ange</span>
                    </div>
                    </div>
                    <div className="flex flex-col space-y-8 flex-grow h-full">
                        {/* items order */}
                            <div className="flex flex-col max-h-60 space-y-4 overflow-auto">
                            <div className="flex flex-none bg-stone-700 rounded-md relative p-2 h-14 -pointer text-xs overflow-hidden transition-all duration-500 delay-200 ease-in-out translate-x-0">
                                <div className="flex justify-between bg-[#2d2d2d] p-2 rounded-md absolute left-8 transition-all delay-200 h-full top-0 w-full shadow-xl shadow-rose-500/50">
                                    <div className="flex space-x-2">
                                        <div  className="h-full w-20 bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                        <div className="flex flex-col justify-between">
                                        <div className="flex space-x-2">
                                            <span title="Double Burger sgsgsgsgsggssgsgsggsgsggsgsgs sgsssgggs gsgg" className="max-w-32 text-el truncate" >Double Burger</span>
                                            <span>(2X)</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-[10px]">
                                            <span className="h-1 w-1 rounded-full bg-stone-400"></span>
                                            <span className="text-stone-400">Extra Sauce</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-end">
                                    <span>$5.99</span>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#dc2626" className="w-5 h-5 self-center ">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                                </svg>  
                            </div>
                            </div>
                        {/* items order */}

                        {/* calcul */}
                            <div className="flex flex-col justify-between flex-grow bg-[#2d2d2d] p-4 rounded-md transition-all duration-500 delay-200 ease-in-out overflow-hidden">
                                <div className="flex flex-col space-y-4 -translate-y-0 duration-[2000ms] transition-all text-sm ">
                                    <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>$1282.50</span>
                                    </div>
                                    <div className="flex justify-between">
                                    <span>Tax 10%</span>
                                    <span>$17.15</span>
                                    </div>
                                    <div className="py-4 text-2xl border-t border-dotted">
                                    <div className="flex justify-between">
                                        <span>Total</span>
                                        <span>$188.65</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-xs items-center justify-center text-stone-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                <span>No items added</span>    
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
                        {/* calcul */}
                    </div>
                </div>
            </div>
        </>
    );
}