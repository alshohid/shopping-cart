import React from 'react'
import { createCart } from '../APIRequst/APIRequest'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useNavigate } from 'react-router-dom'
import { MyTokenContext } from '../Context/TokenContext'
import 'lazysizes'

const ShowingProductList = ({ product = {} }) => {
  const { image, title, short_des, stock, star, remark, price } = product

  const [myToken, setMyToken] = MyTokenContext()
  console.log('showing product Token', myToken)
  const navigate = useNavigate()
  const handleAddToCart = () => {
    createCart(product.id)
      .then((data) => {
        if (data?.msg === 'success') {
          toast.success('Product successfully added ', {
            position: 'top-right',
          })
        } else {
          navigate('/login')
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
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md max-w-[250px]  max-h-[400px] mx-auto p-4"
      >
        <figure className="max-w-sm max-h-sm">
          <img
            src={image}
            alt={title}
            className="w-1/2 h-auto mx-auto lazyload object-cover rounded mb-2"
          />
        </figure>
        <div className="px-3 w-[250px] mx-auto">
          <h2 className="text-md font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{short_des}</p>
          <p className="text-gray-800 text-sm mb-2">Stock: {stock}</p>
          <div className="flex items-center mb-2">
            <p className="text-black font-bold mr-1">
              {price}{' '}
              <span className="text-xs text-yellow-900 font-bold"> BDT</span>{' '}
            </p>
          </div>
          <p className="text-gray-600 text-sm">Remark: {remark}</p>
          <div className="card-action justify-end text-end p-3 ">
            <button
              key={product.id}
              onClick={handleAddToCart}
              className="btn btn-outline h-[25px] btn-xs py-2  btn-success rounded-none "
            >
              Add To Cart
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default ShowingProductList
