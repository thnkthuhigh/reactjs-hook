import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isErr, setisErr] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        let data = response && response.data ? response.data : [];
        setData(data);
      } catch (error) {
        setisLoading(false);
        setisErr(true);
      }
    };
    fetchData();
    setisLoading(false);
    setisErr(false);
  }, [url]);

  return { data, isLoading, isErr };
};

export default useFetch;
