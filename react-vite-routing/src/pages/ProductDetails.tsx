import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

    const params = useParams();

    useEffect(() => {
        console.log(params?.id);
    }, [params]);

  return (
    <div>ProductDetails</div>
  )
}
