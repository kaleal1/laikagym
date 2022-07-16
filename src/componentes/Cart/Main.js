
import Product from './prod';

 export default function Main(props) {


    const {products, onAdd, fetchProducts, getName} = props;
  return (
    <main className="block col-2">
      <h2>Productos</h2>
            <button className="btn btn-primary" onClick={fetchProducts}>
                {getName()}
            </button>
            <div className="all-cards d-flex">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}/>
        ))}
      </div>
    </main>
  );
}