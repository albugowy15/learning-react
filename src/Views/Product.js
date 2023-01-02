import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams()
  const url = `https://63b29f845e490925c51cff54.mockapi.io/products/${id}`
  const [product, setProduct] = useState(null)

  let content = null

  useEffect(() => {
    axios.get(url).then(response => {
      setProduct(response.data)
    })
  }, [url])

  if (product) {
    content =
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.name}</h1>

        <div>
          <img width={300} src={product.images[0].imageUrl} alt={product.name}></img>
        </div>

        <div className="font-bold text-xl mb-3">
          $ {product.price}
        </div>
        <div>
          {product.description}
        </div>
      </div>

  }

  return (
    <div>
      {content}
    </div>
  )
}

export default Product