import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/Navbar";
export default function ProductsPage() {

  const [products, setProducts] = useState(() => [
    {
      id: 1,
      name: "Product 1",
      price: 12.34,
      inCart: false
    },
    {
      id: 2,
      name: "Product 2",
      price: 11.22,
      inCart: false
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.55,
      inCart: false
    },
    {
      id: 4,
      name: "Product 4",
      price: 7.55,
      inCart: false
    },
    {
      id: 5,
      name: "Product 5",
      price: 7.55,
      inCart: false
    }
  ])

  const [cartItems, setCartItems] = useState(() => []);

  // const updateProducts = () => {
  //   products.map(product => {
  //     cartItems.map(cart => {
  //       if (product.id === cart.id) {
  //         product = cart;
  //         console.log(product);
  //       }
  //     })
  //   });
  //   setProducts(products);
  // }

  useEffect(() => {
    setCartItems(getFromLocalStorage());
    // console.log(products);
  }, [])

  const changeCartState = (productId, newState) => {
    for (const product of products) {
      if (product.id === productId) {
        product.inCart = newState;
      }
    }
    return products;
  }

  const addToCart = (productId) => {
    // const productsChange = ;
    setProducts(changeCartState(productId, true));
    saveToLocalStorage();
    setCartItems(getFromLocalStorage());
  }

  const removeFromCart = (productId) => {
    setProducts(changeCartState(productId, false));
    saveToLocalStorage();
    setCartItems(getFromLocalStorage());
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products.filter(product => product.inCart)))
  }

  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('products'));
  }

  return (
    <>
      <NavBar />
      <div>Products</div>
      <div>
        <ul>
          {
            products && products.map(product =>
              <li key={product.id}>
                <span>{product.name}</span> |
                <strong>{product.price}</strong> |
                {!product.inCart && <button onClick={() => { addToCart(product.id) }}>Add to cart</button>}
                {product.inCart && <button onClick={() => { removeFromCart(product.id) }}>Remove from cart</button>}
              </li>
            )
          }

          <hr />

          {
            cartItems && cartItems.map(product =>
              <li key={product.id}>
                <span>{product.name}</span> |
                <strong>{product.price}</strong> |
                {!product.inCart && <button onClick={() => { addToCart(product.id) }}>Add to cart</button>}
                {product.inCart && <button onClick={() => { removeFromCart(product.id) }}>Remove from cart</button>}
              </li>
            )
          }

        </ul>
      </div>
    </>
  )
}