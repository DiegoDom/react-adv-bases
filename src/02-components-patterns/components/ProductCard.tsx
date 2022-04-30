import { createContext, CSSProperties } from 'react';

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, ProductCartInitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: ProductCartInitialValues
}

export const ProductCard = ({ product, children, className, style, value, onChange, initialValues }: Props) => {
  const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product
      }}
    >
      <div className={`${styles.productCard} ${ className }`} style={ style }>{ children && children({
        count: counter,
        isMaxCountReached,
        maxCount: initialValues?.maxCount,
        product,
        increaseBy,
        reset
      })}</div>
    </Provider>
  );
};
