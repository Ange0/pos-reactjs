
function App() {
  return (
    <div className="bg-[#111315] h-screen py-10 w-full overflow-hidden font-poppins">
      <div className="flex items-center justify-center">
        {/* tablet */}
        <div  className="flex-none w-[1080px] relative text-white">
          <img className="w-full h-full" src="/tablet.svg" alt="tablette"/>
          <div className="absolute w-full h-full top-0 pb-1 p-2">
            {/* screen */}
            <div className="bg-[#111315] w-full h-full rounded-[24px] relative">
            <li className="text-green-500 absolute right-2"></li>
              <div className="grid grid-cols-12 gap-2 h-full p-2">
                  <div className="col-span-8 space-y-2 h-full overflow-hidden">
                      <div className="flex flex-col p-2 space-y-2">
                        <div className="text-xs">9:41</div>
                        <div className="flex items-center space-x-8">
                            <div className="flex space-x-2 items-center">
                                <img src="/logo.svg" className="w-8 h-8" alt="logo" />    
                                <span>PointS</span>
                            </div>
                            <div className="flex justify-between flex-grow">
                              <div className="flex h-10 w-60 rounded-lg bg-[#2d2d2d] p-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                  </svg>
                                  <input className="focus:outline-none p-2 bg-[#2d2d2d] h-full w-full text-xs" placeholder="Search menu here" />
                              </div>
                                <img src="/icons/light-mode.svg" alt="light-mode" />
                               {/*  <img src="/icons/dark-mode.svg" alt="light-mode" /> */}
                            </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-4 h-[650px]">
                        {/* sideBar */}
                        <div className="col-span-2 rounded-tr-md rounded-br-md transition-all bg-[#2d2d2d] -translate-x-0 relative p-2">
                          <div className="flex flex-col justify-between h-full text-xs text-stone-100 font-bold">
                            <div className="flex flex-col space-y-4 items-center">
                                <div className="flex flex-col space-y-1 items-center p-4 rounded-lg bg-[#f05756] cursor-pointer transition hover:opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                  </svg>    
                                  <span>Home</span>
                                </div>
                                <div className="flex flex-col space-y-1 items-center p-4 rounded-lg cursor-pointer transition hover:opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                  </svg> 
                                  <span>Menu</span>
                                </div>
                                <div className="flex flex-col space-y-1 items-center p-4 rounded-lg cursor-pointer transition hover:opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                  </svg>
                                  <span>History</span>
                                </div>
                                <div className="flex flex-col space-y-1 items-center p-4 rounded-lg cursor-pointer transition hover:opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                  </svg>
                                  <span>Promos</span>
                                </div>
                                <div className="flex flex-col space-y-1 items-center p-4 rounded-lg cursor-pointer transition hover:opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>Settings</span>
                                </div>
                            </div>
                            <div className="text-[9px] text-center">
                              © 2022 PointS
                            </div>
                          </div>
                          {/* chevron */}
                          <div className="p-1 bg-white text-[#2d2d2d] rounded-full absolute -right-2 top-40 cursor-pointer">
                              <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg> 
                            </div>  
                          {/* chevron */}
                        </div>
                        {/* sideBar */}
                        <div className="flex flex-col space-y-4 col-span-10">
                          {/* Category  */}
                          <div className="flex space-x-4 w-full overflow-x-auto">
                            <div className="flex flex-none space-x-2 border border-red-200 bg-red-100 px-3 py-2 rounded-lg">
                              <img src="/burger.svg" className="w-6 h-6" alt="burger" />
                              <div>Burger</div>
                            </div>
                            <div className="flex flex-none space-x-2 border border-red-200 bg-red-100 px-3 py-1 rounded-lg">
                              <img src="/burger.svg" className="w-6 h-6" alt="burger" />
                              <div>Burger</div>
                            </div>
                            <div className="flex flex-none space-x-2 border border-red-200 bg-red-100 px-3 py-1 rounded-lg">
                              <img src="/burger.svg" className="w-6 h-6" alt="burger" />
                              <div>Burger</div>
                            </div>
                          </div>
                          {/* Category  */}

                          {/* products */}
                            <div className="grid grid-cols-12 gap-2 overflow-auto h-[500PX]">
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                              <div className="flex flex-col space-y-2 col-span-4 bg-[#2d2d2d] p-2 rounded-md">
                                  <div  className="h-24 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url("/burger-asiatique.jpeg")`}}  alt="burger-asiatique"></div>
                                  <span className="text-sm">Burger Asiatique</span>
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold">$5.99 </span>
                                    <span className="text-xs">11 items</span>
                                  </div>
                              </div>
                            </div>
                          {/* products */}
                        </div>
                      </div>
                  </div>
                  <div className="col-span-4 bg-[#2d2d2d] p-4 my-4 rounded-tr-lg rounded-br-lg ">
                      <div className="flex flex-col space-y-8 h-full">
                        <div className="flex flex-col space-y-1" >
                          <span className="text-xl">Orders</span>
                          <span className="text-[10px]">number: 4</span>
                        </div>
                       <div className="flex flex-col space-y-8 flex-grow h-full">
                          {/* items order */}
                            <div className="max-h-80 overflow-auto">
                              <div>jjdj</div>
                              <div>jjdj</div>
                            </div>
                          {/* items order */}

                          {/* calcul */}
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                  jddjj
                                </div>
                                <div className="flex flex-col text-xs items-center justify-center text-stone-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                  </svg>
                                  <span>No items added</span>    
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex flex-col space-y-2">
                                      <div className="text-stone-200">Payment Method</div>
                                        {/* items method */}
                                        <div className="flex space-x-4 text-xs">
                                            <div className="flex  flex-col items-center space-y-2">
                                                <div className="border border-white rounded-md px-6 py-2">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                                </div>
                                                <sapn>Cash</sapn>
                                            </div>
                                            <div className="flex  flex-col items-center space-y-2">
                                                <div className="border border-white rounded-md px-6 py-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                                </svg>  
                                                </div>
                                                <sapn>Card</sapn>
                                            </div>
                                            <div className="flex  flex-col items-center space-y-2">
                                                <div className="border border-white rounded-md px-6 py-2">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                                  </svg>
                                                </div>
                                                <sapn>Wallet</sapn>
                                            </div>
                                          </div>
                                        {/* items method */}
                                    </div>
                                    <button className="bg-white w-full rounded-full py-2 px-4 text-center text-black">
                                      Place order
                                    </button>
                                </div>
                            </div>
                          {/* calcul */}
                       </div>
                      </div>
                  </div>
                </div>
                {/* tablet underline  */}
                <div className="flex justify-center w-full absolute bottom-4">
                    <div className="w-40 rounded-full h-[1.9px] bg-white"></div>
                </div>
                {/* tablet underline  */}
            </div>
            {/* screen */}
          </div>
        </div>
        {/* tablet */}
      </div>
    </div>
  );
}

export default App;
