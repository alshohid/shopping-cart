import React from 'react'
import { createCart } from '../APIRequst/APIRequest'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ShowingProductList = ({ product = {} }) => {
  const { image, title, short_des, stock, star, remark, price } = product

  const handleAddToCart = () => {
    createCart(product.id)
      .then((data) => {
        if (data?.msg === 'success') {
          toast.success('Product successfully added ', {
            position: 'top-right',
          })
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'top-right',
        })
      })
  }
  return (
    <div>
      <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-[110px] h-[150px] mx-auto object-cover rounded mb-2"
          />
        </figure>

        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{short_des}</p>
        <p className="text-gray-800 text-sm mb-2">Stock: {stock}</p>
        <div className="flex items-center mb-2">
          <p className="text-black font-bold mr-1">
            {price}{' '}
            <span className="text-xs text-yellow-900 font-bold"> BDT</span>{' '}
          </p>
        </div>
        <p className="text-gray-600 text-sm">Remark: {remark}</p>
        <div className="card-action justify-end text-end">
          <button
            key={product.id}
            onClick={handleAddToCart}
            className="btn btn-outline btn-sm  btn-success rounded-none mx-auto"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ShowingProductList
