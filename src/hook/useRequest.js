import React, { useState, useEffect } from "react";
import Axios from "axios";
function useRequest(url) {
  // It's a hook what deal with loading, response, error.
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    async () => {
      setError(null); //The response is when error.
      try {
        setLoading(true); //loading...
        const res = await Axios.get(url);
        setResponse(res); //Setting response
      } catch (e) {
        setError(e); //Setting error
      }
      setLoading(false); //Finish loading
    },
    [url]
  );
  return [response, loading, error];
}
export default useRequest;
