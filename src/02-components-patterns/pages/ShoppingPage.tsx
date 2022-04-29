import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} value={ shoppingCart[product.id]?.count || 0 }
            onChange={ onProductCountChange } className="bg-dark text-white" >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard key={ key } product={product}  value={ product.count } onChange={ onProductCountChange }
                className="bg-dark text-white" style={{ width: "100px " }}>
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
};
