import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from './LoaderUtil/Loader'
const HomePageCartApp = lazy(() => import('./Pages/HomePageCartApp'))
const LoginPage = lazy(() => import('./Pages/LoginPage'))
const OTPPage = lazy(() => import('./Pages/OTPPage'))
const CartPage = lazy(() => import('./Pages/CartPage'))

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePageCartApp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
