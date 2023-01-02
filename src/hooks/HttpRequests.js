import axios from "axios";
import { useEffect, useState } from "react";

export function useAxiosGet(url) {
  const [request, sendRequest] = useState({
    loading: false,
    data: null,
    error: false
  })

  useEffect(() => {
    sendRequest({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url).then(response => {
      sendRequest({
        loading: false,
        data: response.data,
        error: false
      })
    }).catch(() => {
      sendRequest({
        loading: false,
        data: null,
        error: true
      })
    })
  }, [url])

  return request

}

