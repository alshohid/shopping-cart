import React, { useState } from 'react'
import NavigationLayout from '../masterLayout/NavigationLayout'
import { userLogin } from '../APIRequst/APIRequest'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import loginBg from '../images/login-bg.jpg'
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  console.log(email)

  const handleUserLogin = async () => {
    await userLogin(email)
      .then((data) => {
        console.log(data)
        if (data?.msg === 'success') {
          navigate(`/otp?email=${email}`)
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: 'top-right',
        })
        setError(err.message)
      })
  }
  return (
    <NavigationLayout>
      <div className="container min-h-screen bg-gray-100 mx-auto">
        <div className=" flex items-center  bg-white p-8 rounded-lg shadow-md   w-100 mx-auto">
          <div>
            <figure>
              <img
                src={loginBg}
                alt="Beautiful Image"
                className="mx-auto w-1/2 mb-4 rounded-lg shadow-md"
              />
            </figure>
          </div>

          <div className="w-full border px-2 py-3">
            <div className="text-center mb-2 mt-2">
              <h1 className="text-2xl font-semibold text-slate-500">
                {' '}
                Login Account{' '}
              </h1>
            </div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="email"
              id="email"
              value={email}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
            <button
              onClick={handleUserLogin}
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <h4 className="text-red-900 text-sm font-bold"> {error} </h4>

      <ToastContainer />
    </NavigationLayout>
  )
}

export default LoginPage
