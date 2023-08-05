import React, { useState } from 'react'
import { userVerifyLogin } from '../APIRequst/APIRequest'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NavigationLayout from '../masterLayout/NavigationLayout'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MyTokenContext } from '../Context/TokenContext'
import OtpImage from '../images/login-bg.jpg'

const OTPPage = () => {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [myToken, setMyToken] = MyTokenContext()

  const [searchEmail] = useSearchParams()
  const email = searchEmail.get('email')

  const navigate = useNavigate()
  const handleVerifyLogin = async () => {
    await userVerifyLogin(email, pin)
      .then((data) => {
        if (data?.msg === 'success') {
          localStorage.setItem('token', data.data)

          // setMyToken(localStorage.setItem('token', data.data))

          toast.success('You are Successfully Logged in ', {
            position: 'top-right',
          })

          navigate('/')
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: 'top-right',
        }),
          setError(err.message)
      })
  }

  return (
    <>
      <NavigationLayout>
        <div className="container h-screen w-screen bg-white mx-auto">
          <div className=" flex items-center  bg-white p-8 rounded-lg shadow-md   w-100 mx-auto">
            <div>
              <figure>
                <img
                  src={OtpImage}
                  alt="Beautiful Image"
                  className="mx-auto w-1/2 mb-4 rounded-lg shadow-md"
                />
              </figure>
            </div>

            <div className="w-full border px-2 py-3">
              <div className="text-center mb-2 mt-2">
                <h1 className="text-2xl font-semibold text-slate-500">
                  {' '}
                  User Verifications{' '}
                </h1>
              </div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Pin Number
              </label>
              <input
                onChange={(e) => {
                  setPin(e.target.value)
                }}
                type="number"
                id="number"
                value={pin}
                className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter 4 digit OTP Code "
              />
              <button
                onClick={handleVerifyLogin}
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Verify Login
              </button>
              <div className="py-2">
                <h4 className="text-green-900 text-sm">
                  {' '}
                  A 4 digit OTP send your G-mail to verify Login{' '}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </NavigationLayout>
    </>
  )
}

export default OTPPage
