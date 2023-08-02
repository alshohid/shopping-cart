import React, { useEffect, useState } from 'react'
import { productListApi } from '../APIRequst/APIRequest'
import ProductList from '../Components/ProductList'
import Loader from '../LoaderUtil/Loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MyContext } from '../Context/AuthContext'

const ProductPage = () => {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    ;(async () => {
      await productListApi()
        .then((data) => setProducts(data))
        .catch((err) => {
          toast.error(err.message, {
            position: 'top-right',
          })
        })
    })()
  }, [])

  

  return (
    <div>
      {products === null ? <Loader /> : <ProductList products={products} />}
      <ToastContainer />
      <div></div>
    </div>
  )
}

export default ProductPage
