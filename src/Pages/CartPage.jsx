import React, { useEffect, useState } from 'react'
import NavigationLayout from '../masterLayout/NavigationLayout'
import CartItem from '../Components/CartItem'
import { cartList, removeCart } from '../APIRequst/APIRequest'
import { NavLink } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConvertStringToNumber } from '../LoaderUtil/ConvertStringToNumber'
import { MyContext } from '../Context/AuthContext'

const CartPage = () => {
  const [items, setItems] = useState([])
  const [myItem, setMyItem] = MyContext()
  console.log(items)
  useEffect(() => {
    cartList()
      .then((data) => {
        if (data?.msg === 'success') {
          setItems(data.data)
          const myData = data.data
          setMyItem([...myData])
        }
      })
      .catch((error) => alert('Error '))
  }, [])
  const removeHandleCartProduct = (productId) => {
    removeCart(productId)
      .then((data) => {
        if (data?.msg === 'success') {
          let remainProduct = items.filter(
            (item) => item.product.id !== productId,
          )
          setItems(remainProduct)
          setMyItem(remainProduct)

          toast.success('Product removed from the Cart', {
            position: 'top-right',
          })
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: 'top-right',
        })
      })
  }
  const calculateTotalPrice = () => {
    const totalPrice = items.reduce((total, current) => {
      const price = ConvertStringToNumber(current)
      return total + price
    }, 0)

    return totalPrice
  }

  return (
    <NavigationLayout>
      <div className="container flex mt-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
          <div>
            {items.map((item) => (
              <CartItem
                key={item?.id}
                singleProduct={item.product}
                removeHandleCartProduct={removeHandleCartProduct}
              />
            ))}
          </div>
        </div>
        <div className="h-[600px] mx-auto">
          {items.length > 0 ? (
            <div className=" bg-white w-[400px] h-[286px] text-center mx-auto px-6 py-7 shadow-md">
              <h1 className="text-2xl text-yellow-400 mb-2 font-semibold">
                {' '}
                Order Summary
              </h1>
              <hr />
              <h1 className="text-2xl font-semibold"> {items.length} Items </h1>
              <h2 className="font-semibold">
                {' '}
                <span className="text-xl from-neutral-600 ">
                  Total price{' '}
                </span>:{' '}
                <span className="text-bold">{calculateTotalPrice()} </span>
                <span className="text-xs ">BDT </span>
              </h2>
              <div className="mt-5 ">
                <button className="btn btn-primary btn-sm border rounded-md">
                  CheckOut
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white text-center h-screen w-screen mt-3 ">
              <h1 className="text-3xl text-red-800 font-semibold p-5">
                {' '}
                Your Cart has Empty{' '}
              </h1>

              <NavLink to="/">
                <button className="btn btn-primary rounded-md">
                  {' '}
                  Go to Product{' '}
                </button>
              </NavLink>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </NavigationLayout>
  )
}

export default CartPage
