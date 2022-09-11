import React from 'react'

const ProductList = ({ productItems, toggleCart, cartItems, setCartItems }) => {
  const handleAddProduct = (idx) => {
    const currentProduct = productItems[idx]
    const checkedIndx = cartItems.findIndex(
      (item) => item.id === currentProduct.id,
    )
    let newCartItems
    //checkedIndx === -1 처음 담는 아이템
    if (checkedIndx === -1) {
      newCartItems = [...cartItems, { currentProduct, count: 1 }]
      setCartItems(newCartItems)
    } else {
      //checkedIndex !== -1 중복 아이템
      newCartItems = [...cartItems]
      newCartItems[checkedIndx].count++
    }
    toggleCart()
  }

  return productItems.map(({ id, name, imgSrc, price }, idx) => (
    <article key={id} onClick={() => handleAddProduct(idx)}>
      <div className="rounded-lg overflow-hidden border-2 relative">
        <img src={imgSrc} className="object-center object-cover" alt={name} />
        <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
          <div
            data-productid={id}
            className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
          >
            장바구니에 담기
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-semibold text-gray-900">
        {price.toLocaleString()}원
      </p>
    </article>
  ))
}

export default ProductList
