import { NavLink } from 'react-router-dom'

const CartItem = ({ singleProduct, removeHandleCartProduct }) => {
  const { image, title, price, short_des, stock, id } = singleProduct || {}
  return (
    <div>
      <div className="container  max-h-sm h-auto w-[800px] mx-auto bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex  justify-between">
          <div className="mx-auto">
            <figure>
              <img
                src={image}
                alt={title}
                className="w-[110px] h-[200px] mx-auto object-cover rounded mb-2"
              />
            </figure>
          </div>

          <div className="mx-auto">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-2">{short_des}</p>
            <p className="text-gray-800 text-sm mb-2">Stock: {stock}</p>
            <div className="flex flex-col mb-2">
              <div className="mb-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div>
                <p className="text-black font-semibold mr-1">
                  {price} <span className="text-xs "> BDT</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end">
          <NavLink className="text-red-500 font-semibold  px-3 py-2">
            {' '}
            <button
              onClick={() => {
                removeHandleCartProduct(id)
              }}
              className="px-3 py-2 border rounded-md hover:bg-red-400 hover:text-white "
            >
              {' '}
              Remove Product
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CartItem
