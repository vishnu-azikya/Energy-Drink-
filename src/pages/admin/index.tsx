import React from 'react'

const login = () => {
  return (
    <section className="w-full min-h-[100vh] py-10 bg-[#E7E2FF] relative justify-center flex items-center">
      <div className="container">
        <div className="grid  grid-cols-1 xl:grid-cols-1 gap-6">
          <div className="bg-white formOuter overflow-hidden rounded-2xl relative w-full min-h-[calc(90vh-80px)]">
            <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-6">
              <div
                className="min-h-[calc(90vh-80px)] bg-[#9181F4] bg-cover bg-center rounded-s-2xl loginSideImg">
              </div>
              <div className="py-14 lg:px-14 md:px-14 px-3 flex flex-col items-center justify-center">
                <div className="lg:px-14 md:px-0 px-0 w-100">
                  <h2 className="text-5xl font-bold text-center mb-1">Welcome</h2>
                  <p className="text-lg text-center">How to i get started lorem ipsum dolor
                    at?</p>
                </div>
                <div className="lg:px-14 md:px-14 px-0 w-full">
                  <form action="" method="post" className="w-full">
                    <div className="w-full mb-3 relative mt-4">
                      <input type="email"
                        className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-full px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
                        id="floatingInput" placeholder="Enter Email" />
                      <label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Email
                        address</label>
                    </div>
                    <div className="w-full mb-3 relative">
                      <input type="password"
                        className="border-[1px] floating border-[#ced4da] z-10 relative bg-transparent outline-none shadow-none pt-5 border-solid rounded-full px-3 pb-4 text-md focus:text-[#5038ED] focus:border-[#5038ED] opacity-100 w-full"
                        id="floatingInput" placeholder="enter password" />
                      <label className="text-sm absolute top-0 left-0 bottom-0 flex items-center">Password</label>
                    </div>
                    <div className="text-end mb-3 flex justify-end">
                      <a href="#"
                        className="flex text-[#5038ED] items-center justify-end gap-2 translate-y-0 hover:-translate-y-1 ease-in duration-200">
                        <svg viewBox="0 0 24 24" width="25px" height="25px" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                            stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M12 10V14M10.2676 11L13.7317 13M13.7314 11L10.2673 13"
                              stroke="#5038ED" stroke-width="1.5"
                              stroke-linecap="round"></path>
                            <path d="M6.73241 10V14M4.99999 11L8.46409 13M8.46386 11L4.99976 13"
                              stroke="#5038ED" stroke-width="1.5"
                              stroke-linecap="round"></path>
                            <path d="M17.2681 10V14M15.5356 11L18.9997 13M18.9995 11L15.5354 13"
                              stroke="#5038ED" stroke-width="1.5"
                              stroke-linecap="round"></path>
                            <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8"
                              stroke="#5038ED" stroke-width="1.5"
                              stroke-linecap="round"></path>
                          </g>
                        </svg>
                        Forgot Password</a>
                    </div>
                    <div className="text-center mt-4 pt-2">
                      <button className="btn btn-primary text-white">
                        Login Now
                      </button>
                    </div>
                  </form>
                  {/* <div className="flex items-center justify-center mt-4">
                    <hr className="w-full border-0 opacity-100 bg-[#F0EDFF] h-[2px]" />
                    <h6 className="text-md fw-normal text-nowrap m-0 px-3"><b>Login</b>
                      with Others</h6>
                    <hr className="w-full border-0 opacity-100 bg-[#F0EDFF] h-[2px]" />
                  </div> */}
                  {/* <div className="mt-4 flex align-center gap-3 justify-center">
                    <a href="#"
                      className="w-[70px] h-[50px] p-[10px] rounded-2xl translate-y-0 bg-[#F0EDFF] hover:-translate-y-2 ease-in duration-100">
                      <svg viewBox="0 0 16 16" className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                          stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path fill="#4285F4"
                            d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z">
                          </path>
                          <path fill="#34A853"
                            d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z">
                          </path>
                          <path fill="#FBBC04"
                            d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z">
                          </path>
                          <path fill="#EA4335"
                            d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z">
                          </path>
                        </g>
                      </svg>
                    </a>
                    <a href="#"
                      className="w-[70px] h-[50px] p-[10px] rounded-2xl translate-y-0 bg-[#F0EDFF] hover:-translate-y-2 ease-in duration-100">
                      <svg viewBox="0 0 16 16" className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                          stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path fill="#1877F2"
                            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z">
                          </path>
                          <path fill="#ffffff"
                            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z">
                          </path>
                        </g>
                      </svg>
                    </a>
                    <a href="#"
                      className="w-[70px] h-[50px] p-[10px] rounded-2xl translate-y-0 bg-[#F0EDFF] hover:-translate-y-2 ease-in duration-100">
                      <svg fill="#000000" version="1.1" className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                          stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="7935ec95c421cee6d86eb22ecd114eed">
                            <path style={{ display: 'inline' }}
                              d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89 c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965 C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175 c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947 c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144 c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522 c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023 C414.435,352.487,389.459,285.571,409.034,231.131z">
                            </path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <h6 className="text-md fw-normal text-nowrap text-center mb-0 px-0 mt-4">Don't have
                    account? <b>Registe Now</b></h6> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default login
