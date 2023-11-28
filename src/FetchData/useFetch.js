/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchDataUrl() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchDataUrl()
  }, [url]);
  return {
    data,
    error,
  };
};

export default useFetch;
