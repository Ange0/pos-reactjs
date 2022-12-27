
import { useContext, useEffect, useState } from "react";
import { ProductsDatas } from "../Api/ProductsDatas";
import { IdCurrentCategoryContext } from "../utils/contexts";
import { sleep } from "../utils/helpers";
import ProductItem from "./ProductItem";

export default function Products() {
    const {idCurrentCategory} = useContext(IdCurrentCategoryContext)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function filterProduct(idCurrentCategory) {
            setProducts(null)
            let fiteredProducts = ProductsDatas.filter((product) => product.id_category === idCurrentCategory)
            await sleep(500)
            setProducts(fiteredProducts)
        }

        filterProduct(idCurrentCategory)
    }, [idCurrentCategory]) 

   
    return (
        <>
            <div className={`grid grid-cols-2 gap-2 max-h-[600px] overflow-auto mr-2  transition-all duration-1000 ${products ? 'opacity-100': 'opacity-0'}`}>
                {products && products.map((product)=> <ProductItem productProps={product} key={product.id} />) }
            </div>
        </>
    );
}