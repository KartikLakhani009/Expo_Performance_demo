import React, { useCallback, useEffect, useState } from "react";
import { TProduct, products as mainData } from "./productData";

interface IUseProductListProps {}

const api_timer = 5000;

const LIMIT = 20;
const TOTAL_DATA = 60;

const timer = (cb: (resolve: Function, reject: Function) => void, ms: number) =>
  new Promise((resolve: Function, reject: Function) =>
    setTimeout(() => cb(resolve, reject), ms)
  );

export const useProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [currentPointer, setCurrentPointer] = useState<number>(0);
  const [isFetchNextProducts, setIsFetchNextProducts] = useState(false);
  const fetchNextProducts = useCallback(async () => {
    setIsFetchNextProducts(true);
    await timer((resolve, reject) => {
      try {
        const newProducts = mainData.slice(
          currentPointer,
          currentPointer + LIMIT
        );
        setProducts([...products, ...newProducts]);
        setIsFetchNextProducts(false);
        setCurrentPointer(currentPointer + LIMIT);
        resolve();
        
      } catch (error) {
        reject(error);
      }
    }, api_timer);
    //  setTimeout(()=>{
    //     const newProducts = mainData.slice(currentPointer,currentPointer+LIMIT);
    //      setProducts([...products,...newProducts]);
    //      setIsFetchNextProducts(false);
    //      setCurrentPointer(currentPointer+LIMIT);
    //  },api_timer)
    
  }, []);

  useEffect(() => {
    (async()=>await fetchNextProducts())();
  }, []);

  return { products, isFetchNextProducts, fetchNextProducts, TOTAL_DATA, fetchCount: currentPointer};
};
