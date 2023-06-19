import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../../productsMok"
import { ProductDetail } from "./ProductDetail"

export const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({})

  const { id } = useParams()

  useEffect(() => {
    let productFind = products.find((product) => product.id === Number(id))

    const getProduct = new Promise((res, rej) => {
      res(productFind)
    })

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err))
  }, [id])

  console.log(productSelected)

  return <ProductDetail productSelected={productSelected} />
}
