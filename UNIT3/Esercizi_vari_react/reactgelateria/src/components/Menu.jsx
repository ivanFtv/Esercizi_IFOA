import { useState, useEffect } from 'react'
import Gelato from './Gelato'

const Menu = () => {

    const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

    //Inizializzo e Setto isLoading
    const [isLoading, setLoading] = useState(false)
    //Inizializzo e Setto isError
    const [isError, setError] = useState(false)
    //Inizializzo e Setto products
    const [products, setProducts] = useState([])
    //Inizializzo e Setto filteredProducts
    const [filteredProducts, setFilteredProducts] = useState([])

    const [selected, setSelected] = useState(0)

    const [categories, setCategories] = useState([])

    const filtraProdotti = (category, index) => {
        setSelected(index)

        if (category === "Tutti") {
            setFilteredProducts(products)
        } else {
            const prodottiFiltrati = products.filter((el) => el.categoria === category ? el : "")
            setFilteredProducts(prodottiFiltrati)
        }
    }

    useEffect(() => {
        (async () => {
            setLoading(true)
            setError(false)
            try {
                const resp = await fetch(url)
                const prod = await resp.json()
                setProducts(prod.data)
                setFilteredProducts(prod.data)

                const categories = Array.from(
                    new Set(prod.data.map((pr) => pr.categoria))
                );

                categories.unshift("Tutti");
                setCategories(categories);

                setLoading(false)
                console.log(products);
            }
            catch (error) {
                console.log(error);
                setError(true)
                setLoading(false)
            }
        })()
    }, []) 


    return (
        <div className="container">
            <h4 style={{  textAlign: "center", textTransform: "uppercase" }}>
                Le Nostre Scelte
            </h4>
            {!isLoading && !isError ? (
                <>
                    <div className="lista-categorie">
                        {categories.map((category, index) => 
                        <button 
                            key={index}
                            className={`btn btn-selector ${selected === index && "active"}`}
                            onClick={() => filtraProdotti(category, index)}
                            >{category}
                            </button>
                        )}
                    </div>
                    <hr />
                    <div className="vetrina">
                        {filteredProducts.map((product) => 
                            <Gelato key={product.id} {...product} />
                        )}
                    </div>
                </>
            ) : !isLoading && isError ? (
                <h4 style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  >
                    Errore...
                </h4>
            ) : ( 
                <h4
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  >Caricamento...</h4>
            )
        }
        </div>
    )
}

export default Menu