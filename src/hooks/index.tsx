import { useEffect, useState } from 'react';


export function useLoadData(getData: () => Promise<[]>) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const loadData = () => {
      setIsLoading(true);
      getData()
         .then((loadedData: any) => setData(loadedData))
         .catch((error: any) => setError(error))
         .finally(() => setIsLoading(false));
   }
   useEffect(() => {
      loadData();
   }, []);

   return {
      data, isLoading, error
   }
}

export function useClicker(initialCount: number) {
   const [count, setCount] = useState(initialCount);
   const handlerClick = () => {
      setCount((updateCount: number) => updateCount + 1);
   }
   useEffect(() => {
      window.addEventListener('click', handlerClick);
      return () => {
         window.removeEventListener('click', handlerClick);
      }
   }, []);
   return count;
}

//---------------------------------

export function useToggle(initialValue: any) {
   const [value, setValue] = useState(initialValue);
   const toggle = () => {
      setValue(!value);
   }

   return [value, toggle]
}

//---------------------------------

// export function useLocalStorage(initialValue: [], key: string) {
//    const getValue = () => {
//       const storage = localStorage.getItem(key);

//       if (storage) {
//          return JSON.parse(storage);
//       }
//       return initialValue;
//    }

//    const [value, setValue] = useState(getValue);

//    useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value))
//    }, [value])

//    return [value, setValue]
// }