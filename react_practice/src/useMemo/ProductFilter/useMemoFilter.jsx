import { useState, useMemo , useEffect } from "react";

export const UesMemoProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const isMatchingCharacter = (str, char) => {
        if (!str) return false;
        str = str.toLowerCase();
        char = char.toLowerCase();
        return str.match(char);
    };
    const filteredProducts = useMemo(() => {
        const result = products.filter((item) => {
            const { title, description, category } = item;

            if (isMatchingCharacter(title, search)) {
                return true;
            }

            if (isMatchingCharacter(description, search)) {
                return true;
            }

            if (isMatchingCharacter(category, search)) {
                return true;
            }

            return false;
        });

        return result;
    }, [search]);

    console.log("Re-render", products, filteredProducts);

    return (
        <>
            <div>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <h1>My Products</h1>
                <ul>
                    {filteredProducts.map((item) => {
                        return <li key={item.id}>{item.title}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

