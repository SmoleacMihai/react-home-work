import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import Form from '../components/shoping/Form';

export default function ShoppingCartPage() {
  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('products'));
  }

  const [products, setProducts] = useState(getFromLocalStorage())

  const changeCartState = (productId, newState) => {
    setProducts(
      products.filter(product => product.id !== productId)
    )
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products.filter(product => product.inCart)))
  }

  useEffect(() => {
    saveToLocalStorage();
  }, [products])

  const removeFromCart = (productId) => {
    changeCartState(productId, false);
  }

  return (
    <>
      <NavBar />
      <div>Shopping cart</div>
      {
        products && products.map(product =>
          <li key={product.id}>
            <span>{product.name}</span> |
            <strong>{product.price}</strong> |

            <button onClick={() => { removeFromCart(product.id) }}>Remove from cart</button>
          </li>
        )
      }
      <hr />
      {
        !(products.length === 0) ? <Form /> : null
      }
      <hr />
      <pre>
        {JSON.stringify(products, undefined, 2)}
      </pre>
    </>
  )
}