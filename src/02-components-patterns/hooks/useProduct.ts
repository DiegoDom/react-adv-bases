import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, value = 0, onChange }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const count = Math.max(counter + value, 0);
    setCounter(count);

    onChange && onChange({ count, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);
  

  return {
    counter,
    increaseBy,
  };
};
