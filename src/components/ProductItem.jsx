export default function ProductItem({product}) {
    return (
        <>
            <div className="flex flex-col space-y-2 col-span-1 bg-[#2d2d2d] p-2 rounded-lg relative">
                <div className="h-40 w-full bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${product.urlImage})`}}  alt="burger-asiatique"></div>
                <span className="text-sm">{product.name}</span>
                <div className="flex justify-between items-center">
                    <span className="font-bold">{`${product.devise} ${product.price}`} </span>
                    <span className="text-[10px]">{product.available} item(s)</span>
                </div>
                <div className="flex flex-col space-y-8 bg-[#f05756] absolute left-0 h-4/5 opacity-100 transition-all bottom-0 w-full rounded-lg p-2">
                    <span className="text-xl">{product.name}</span>
                    <span className="font-bold text-2xl">{`${product.devise} ${product.price}`}</span>
                    <div className="flex justify-center space-x-8 items-center">
                        <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white hover:opacity-60">-</div>
                        <span className="text-4xl">2</span>
                        <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-white hover:opacity-60">+</div>
                    </div>
                </div>
            </div>
        </>
    )
}