import { ProductCard } from "../../common/productCard/ProductCard"

export const ProductsList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((elemento) => (
        <ProductCard key={elemento.id} elemento={elemento} />
      ))}
    </div>
  )
}
