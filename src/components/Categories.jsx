export default function Categories() {
    return (
        <>
            <div className="flex justify-between w-full overflow-x-auto mt-4 p-2">
                <div className="flex flex-none space-x-2 border-2 border-red-200 bg-red-500/30 px-3 py-2 rounded-lg">
                <img src="/categories/burger.svg" className="w-6 h-6" alt="burger" />
                <div>Burgers</div>
                </div>
                <div className="flex flex-none space-x-2 border-2 border-[#2d2d2d] bg-[#2d2d2d] px-3 py-2 rounded-lg">
                <img src="/categories/noodle.svg" className="w-6 h-6" alt="burger" />
                <div>Noodles</div>
                </div>
                <div className="flex flex-none space-x-2 border-2 border-[#2d2d2d] bg-[#2d2d2d] px-3 py-2 rounded-lg">
                <img src="/categories/drink.svg" className="w-6 h-6" alt="burger" />
                <div>Drinks</div>
                </div>
                <div className="flex flex-none space-x-2 border-2 border-[#2d2d2d] bg-[#2d2d2d] px-3 py-2 rounded-lg">
                <img src="/categories/dessert.svg" className="w-6 h-6" alt="burger" />
                <div>Dessert</div>
                </div>
            </div>
        </>
    );
}