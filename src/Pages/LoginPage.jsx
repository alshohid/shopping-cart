import React, { useState } from 'react'
import NavigationLayout from '../masterLayout/NavigationLayout'
import { userLogin } from '../APIRequst/APIRequest'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  console.log(email)

  const handleUserLogin = async () => {
    await userLogin(email)
      .then((data) => {
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
      <div className="max-w-sm mx-auto">
        <div className="flex items-center border-b  border-b-2 border-blue-500 py-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <button
            onClick={handleUserLogin}
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Next
          </button>
        </div>
        <h4 className="text-red-900 text-sm font-bold"> {error} </h4>
      </div>
      <ToastContainer />
    </NavigationLayout>
  )
}

export default LoginPage
