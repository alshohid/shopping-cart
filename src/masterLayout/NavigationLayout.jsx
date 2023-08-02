import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context/AuthContext'
import { ConvertStringToNumber } from '../LoaderUtil/ConvertStringToNumber'

const NavigationLayout = (props) => {
  const [myItem, setMyItem] = MyContext()
  const calculateTotalPrice = () => {
    const subTotal = myItem.reduce((total, current) => {
      const price = ConvertStringToNumber(current)
      return total + price
    }, 0)
    return subTotal
  }
  return (
    <div>
      <div className="navbar bg-base-100 z-40 top-0 sticky shadow-md">
        <div className=" flex-1 ">
          <div>
            <a className="btn btn-ghost normal-case text-xl">Online Shopping</a>
          </div>
          <div className="navbar-end">
            <ul className="flex list ">
              <li className="flex-1 px-4 py-2  mx-6 text-center ">
                <NavLink to="/">
                  <button className="btn btn-active btn-sm  border rounded-md">
                    {' '}
                    Product{' '}
                  </button>
                </NavLink>
              </li>
              <li className="flex-1 px-4 py-2   text-center ">
                <NavLink to="/login">
                  {' '}
                  <button className="btn btn-info btn-sm rounded-md border-spacing-2">
                    {' '}
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {' '}
                  {myItem.length}{' '}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body flex flex-cols items-center">
                <span className="font-bold text-lg">{myItem.length} Items</span>
                <span className="text-info">
                  Subtotal:{' '}
                  <span className="font-bold text-sm">
                    {' '}
                    {calculateTotalPrice()}{' '}
                  </span>{' '}
                  <span className="text-xs"> BDT </span>
                </span>
                <div className="card-actions">
                  <NavLink to="/cart">
                    <button className="btn btn-primary btn-block rounded-md">
                      View cart
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="#" alt="image" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default NavigationLayout
