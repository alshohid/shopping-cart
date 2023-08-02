let baseUrl = ' https://cart-api.teamrabbil.com/api'
import axios from 'axios'
export async function productListApi() {
  let res = await axios.get(baseUrl + '/product-list')
  if (res.status === 200) return res.data.data
  return []
}

export async function userLogin(email) {
  let res = await fetch(baseUrl + '/user-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserEmail: email,
    }),
  })
  let data = await res.json()
  return data
}

export async function userVerifyLogin(email, pin) {
  let res = await fetch('https://cart-api.teamrabbil.com/api/verify-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      UserEmail: email,
      OTP: pin,
    }),
  })
  let data = await res.json()
  return data
}

export async function createCart(productId) {
  let res = await fetch(baseUrl + '/create-cart/' + productId, {
    method: 'GET',
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  let data = await res.json()
  return data
}

export async function cartList() {
  let res = await fetch('https://cart-api.teamrabbil.com/api/cart-list', {
    method: 'GET',
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  let data = await res.json()
  return data
}
export async function removeCart(productID) {
  let res = await fetch(baseUrl + '/remove-cart/' + productID, {
    method: 'GET',
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  let data = await res.json()
  return data
}
