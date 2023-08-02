import React, { useState } from 'react'
import { userVerifyLogin } from '../APIRequst/APIRequest'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NavigationLayout from '../masterLayout/NavigationLayout'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const OTPPage = () => {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')

  const [searchEmail] = useSearchParams()
  const email = searchEmail.get('email')

  const navigate = useNavigate()
  const handleVerifyLogin = async () => {
    await userVerifyLogin(email, pin)
      .then((data) => {
        if (data?.msg === 'success') {
          localStorage.setItem('token', data.data)
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
        <div className="max-w-sm mx-auto">
          <div className="flex items-center border-b  border-b-2 border-blue-500 py-2">
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="number"
              placeholder="4 digit OTP"
              aria-label="otp"
              required
            />
            <button
              onClick={handleVerifyLogin}
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Verify Login
            </button>
          </div>

          <div>
            <h4 className="text-green-900 text-sm">
              {' '}
              A 4 digit OTP send your G-mail to verify Login{' '}
            </h4>
          </div>
        </div>
        <ToastContainer />
      </NavigationLayout>
    </>
  )
}

export default OTPPage
