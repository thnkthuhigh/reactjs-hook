import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, dataCountry) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isErr, setisErr] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        let responseData = response && response.data ? response.data : [];
        setData(responseData);
        setisLoading(false);
        setisErr(false);
      } catch (error) {
        setisLoading(false);
        setisErr(true);
      }
    };

    if (dataCountry === true) {
      setTimeout(() => {
        fetchData();
      }, 2000);
    } else {
      setTimeout(() => {
        fetchData();
      });
    }
  }, [url, dataCountry]); // Thêm dataCountry vào dependency array

  return { data, isLoading, isErr };
};

export default useFetch;
