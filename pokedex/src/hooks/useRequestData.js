import { useState, useEffect } from 'react'
import axios from 'axios'
import { urlApi } from '../apiConfig/urlApi'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${urlApi}${finalUrl}`)
      .then((res) => {
        setData(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  }, [finalUrl])

  return data
}

export default useRequestData