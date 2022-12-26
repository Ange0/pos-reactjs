import { CategoriesDatas } from "../Api/CategoriesDatas";
import CategoryButton from "./CategoryButton";

export default function Categories() {
    return (
        <>
            <div className="flex justify-between w-full overflow-x-auto mt-4 p-2">
                { CategoriesDatas.map((category) => <CategoryButton category={category} key={category.id} />) }
            </div>
        </>
    );
}