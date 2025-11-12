import { useEffect, useState } from "react"

export const useGetApi = (tableName: string) => {
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState([])
  const [refetch, setRefetch] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(true)
      const respo = await fetch(`${import.meta.env?.VITE_API_URL}/${tableName}`)
      if (respo.ok) {
        const result = await respo.json()
        setRecords(result)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const refetchData = () => {
    setRefetch(true)
  }

  useEffect(() => {
    if (refetch) {
      fetchData()
      setRefetch(false)
    }
  }, [refetch])

  return { records, loading, refetchData }
}
