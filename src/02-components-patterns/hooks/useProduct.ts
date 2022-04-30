import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, ProductCartInitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: ProductCartInitialValues
}

export const useProduct = ({ product, value = 0, onChange, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false); 

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    let count = Math.max(counter + value, 0);
    const maxValue = initialValues?.maxCount || null;
    if (maxValue) {
      count = Math.min(count, maxValue);
    }

    setCounter(count);

    onChange && onChange({ count, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);
  
  useEffect(() => {    
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset
  };
};
