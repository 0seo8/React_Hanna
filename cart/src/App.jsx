import './App.css'

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold">오늘의 상품</h2>
          <button
            id="open-cart-btn"
            className="fill-gray-400 hover:fill-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
            </svg>
          </button>
        </header>
        <section id="product-list">
          <div
            id="product-card-grid"
            className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4"
          >
            {/* 아래 하드코딩 되어있는 상품 목록들을 src/api/productData.json을 바탕으로 불러오도록 변경해주세요.  */}
            <article id="product-card">
              <div className="rounded-lg overflow-hidden border-2 relative">
                <img
                  src="asset/cherry.png"
                  className="object-center object-cover"
                  alt="체리 두알"
                />
                <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                  <div
                    data-productid="1"
                    className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                  >
                    장바구니에 담기
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-gray-700">체리 두알</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                10,000원
              </p>
            </article>
            <article id="product-card">
              <div className="rounded-lg overflow-hidden border-2 relative">
                <img
                  src="asset/hamburger.png"
                  className="object-center object-cover"
                  alt="게살버거"
                />
                <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                  <div
                    data-productid="2"
                    className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                  >
                    장바구니에 담기
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-gray-700">게살버거</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                3,000원
              </p>
            </article>
            <article id="product-card">
              <div className="rounded-lg overflow-hidden border-2 relative">
                <img
                  src="asset/fries.png"
                  className="object-center object-cover"
                  alt="감자튀김"
                />
                <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                  <div
                    data-productid="3"
                    className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                  >
                    장바구니에 담기
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-gray-700">감자튀김</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                1,500원
              </p>
            </article>
          </div>
        </section>
      </div>
      {/* backdrop의 가시성은 hidden 속성으로 제어합니다.  */}
      <div
        id="backdrop"
        className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        hidden
      ></div>
      <aside className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        {/* 장바구니의 가시성은 아래 div의 (id="shopping-cart") class명으로 제어합니다. 
          translate-x-full: 장바구니 닫힘 translate-x-0: 장바구니 열림 */}
        <section
          className="pointer-events-auto w-screen max-w-md transition ease-in-out duration-500 translate-x-full"
          id="shopping-cart"
        >
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold">장바구니</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <svg
                      id="close-cart-btn"
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* 아래 하드코딩 되어있는 장바구니 목록들을 유저 상호작용에 맞게 렌더링 되도록 변경해주세요.  */}
              <div id="cart-list">
                <ul className="divide-y divide-gray-200">
                  <li className="flex py-6" id="4">
                    <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="asset/salad.png"
                        className="h-full w-full object-cover object-center"
                        alt="안든든한 샐러드"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>안든든한 샐러드</h3>
                          <p className="ml-4">3,000원</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between">
                        <div className="flex text-gray-500">
                          <button className="decrease-btn">-</button>
                          <div className="mx-2 font-bold">1개</div>
                          <button className="increase-btn">+</button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-sky-400 hover:text-sky-500"
                        >
                          <p className="remove-btn">삭제하기</p>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="flex py-6" id="3">
                    <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="asset/fries.png"
                        className="h-full w-full object-cover object-center"
                        alt="감자튀김"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>감자튀김</h3>
                          <p className="ml-4">1,500원</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between">
                        <div className="flex text-gray-500">
                          <button className="decrease-btn">-</button>
                          <div className="mx-2 font-bold">1개</div>
                          <button className="increase-btn">+</button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-sky-400 hover:text-sky-500"
                        >
                          <p className="remove-btn">삭제하기</p>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between font-medium">
                <p>결제금액</p>
                <p className="font-bold" id="total-count">
                  0원
                </p>
              </div>
              <a
                id="payment-btn"
                href="./"
                className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
              >
                결제하기
              </a>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  또는
                  <button
                    type="button"
                    className="font-medium text-sky-400 hover:text-sky-500"
                  >
                    쇼핑 계속하기
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
      </aside>
      <footer className="text-center text-gray-500 text-xs pb-6">
        ©2022 Hanameee Corp. All rights reserved.
      </footer>
    </div>
  )
}

export default App
