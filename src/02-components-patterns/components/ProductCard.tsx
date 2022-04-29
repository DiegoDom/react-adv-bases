import { createContext, CSSProperties, ReactElement } from 'react';

import { useProducto } from "../hooks/useProduct";
import { ProductContextProps, Product } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProducto();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${ className }`} style={ style }>{children}</div>
    </Provider>
  );
};
