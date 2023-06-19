import { UseCount } from "./hooks/UseCount"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = UseCount(initial, stock)

  return (
    <>
      <div className="count--container">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  )
}
