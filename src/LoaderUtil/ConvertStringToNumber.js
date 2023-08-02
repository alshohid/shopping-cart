export function ConvertStringToNumber (current){
       const priceString = current.product.price
      const priceStringWithoutComma = priceString.replace(/,/g, '')
      const price = parseInt(priceStringWithoutComma)
      return price;
}