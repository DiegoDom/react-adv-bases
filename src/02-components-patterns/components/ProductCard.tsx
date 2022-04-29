import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ product, children, className, style, value, onChange }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

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
