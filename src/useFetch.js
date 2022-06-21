import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const abortContr = new AbortController

    setTimeout(() => {
      fetch(url, { signal: abortContr.signal })
        .then(res => {
          if (!res.ok) throw Error("Could not fetch the data for that resource")
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        }).catch(err => {
          if (err.name === "AbortError") {
            console.log("Fetch abborted");
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }, 1000);

    return () => abortContr.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch

// ! THIS CUSTOM HOOK PURPOSE IS TO FETCH DATA FROM AN ENDPOINT
// ! IT RETURNS THE DATA IF "RES.OK", THE ERROR MESSAGE IF THE FETCH FAILED, AND THE PENDING STATUS
