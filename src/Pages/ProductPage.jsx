import React, { useEffect, useState } from 'react'
import { productListApi } from '../APIRequst/APIRequest'
import ProductList from '../Components/ProductList'
import Loader from '../LoaderUtil/Loader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductPage = () => {
  const [products, setProducts] = useState(null)

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
    <div className=" container bg-slate-50  w-screen flex items-center justify-center mx-auto">
      <div className="w- h-auto mx-auto ">
        {products === null ? <Loader /> : <ProductList products={products} />}
      </div>

      <ToastContainer />
    </div>
  )
}

export default ProductPage
