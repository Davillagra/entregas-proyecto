import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { products } from "../../../productsMok"
import { ProductsList } from "./ProductsList"

export const ProductsListContainer = () => {
  const [items, setItems] = useState([])

  const { catName } = useParams()

  useEffect(() => {
    let filteredProducts = products.filter(
      (product) => product.category === catName
    )

    const tarea = new Promise((resolve) => {
      resolve(catName ? filteredProducts : products)
    })

    tarea
      .then((res) => setItems(res))
      .catch((err) => {
        console.log(err)
      })
  }, [catName])

  return <ProductsList items={items} />
}
