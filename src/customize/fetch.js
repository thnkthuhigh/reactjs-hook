import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, dataCountry) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isErr, setisErr] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);

          let data = response && response.data ? response.data : [];

          if (dataCountry === false) {
            setData(data.slice(0, 9));
          } else {
            setData(data);
          }
          setisLoading(false);
          setisErr(false);
        } catch (error) {
          setisLoading(false);
          setisErr(true);
        }
      };
      setTimeout(() => {
        fetchData();
      }, 1000);
    },
    [url],
    [data]
  );

  return { data, isLoading, isErr, setData };
};

export default useFetch;
