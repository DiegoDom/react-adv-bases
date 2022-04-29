import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            background: "#70D1F8",
          }}
        >
          <ProductCard.Image
            style={{
              padding: "10px",
              width: "calc(100% - 20px)",
            }}
          />
          <ProductCard.Title
            style={{
              fontWeight: "bold",
              textAlign: 'center'
            }}
          />
          <ProductCard.Buttons
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title={`${product.title} *noImports`}
            className="text-bold"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
