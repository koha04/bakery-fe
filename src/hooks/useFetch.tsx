import axios from "axios";
import { useEffect, useState } from "react";
import { AmountProductsProp } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<{
    products: AmountProductsProp[];
  }>({ products: [] });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(url);
        const result = await res.data;

        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [url]);

  return { data, setData };
};

export default useFetch;
