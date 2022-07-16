import Main from './Main';
import Basket from './Basket';
import { useState, useEffect } from 'react';
import './carrito.css'
import {httpGet} from "../../utils/httpFunctions";





function Tienda() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState(true)

  const getName = () => {
    return filtered ? "Dejar de filtrar" :"Filtrar por precio mayores a 50"
  }


  const fetchProducts = () => {
    setFiltered(!filtered)
    if (filtered) {
      httpGet('api/Products/')
          .then((res) => setProducts(res.data))
    }
    else {
      httpGet('api/Products/?price=50')
          .then((res) => setProducts(res.data))

    }}


  useEffect(fetchProducts, [])



  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="row">
        <Main products={products} onAdd={onAdd} fetchProducts={fetchProducts} getName={getName} />
        <Basket
    cartItems={cartItems}
    onAdd={onAdd}
    onRemove={onRemove}
    />
      </div>
    </div>
  );
}

export default Tienda;