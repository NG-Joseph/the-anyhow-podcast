import React from 'react'
import pic11 from '../img/pic11.jpg'
import pic12 from '../img/pic12.jpg'
import pic14 from '../img/pic14.jpg'
import pic15 from '../img/pic15.jpg'
import Banner from '../img/Frame.png'

const store = () => {
  return (
    <div className='my-20'>
      <div className='mb-8'>
          <img src={Banner} alt="" />
      </div>
      <div className='flex flex-row justify between pb-12'>
          <h2 className='text-3xl pt-3 ml-5'>Anyhow Collection</h2>
          <a href="#" className='text-xl flex flex-row pt-4 ml-5'>
          View ALL
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          </a>
      </div>
      <div className='grid grid-flow-row grid-cols-4 gap-10 ml-8'>
        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic11} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3 '>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>

        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic12} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>




        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic15} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='lg:flex flex-row justify-between align-middle'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>



        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic11} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4  text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>


        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic14} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>

        <div className='shadow-lg rounded-lg pl-4 flex flex-col'>
          <a href="">
          <img src={pic12} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>


        <div className='shadow-lg rounded-lg pl-4'>
          <a href="">
          <img src={pic15} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>


        <div className='shadow-lg rounded-lg pl-4'>
          <a href="">
          <img src={pic14} alt=""  className='rounded-tl-lg rounded-tr-lg'/>
          </a>
          <div>
            <h3><a href="">Anyhow Hoody</a></h3>
            <div className='flex flex-row my-3'>
              <div className='bg-black h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-red-600 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2'></div>
              <div className='bg-green-700 h-5 w-5 rounded-full shadow-md mr-2'></div>
            </div>
            <div className='lg:flex flex-row my-3'>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>XXL</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>L</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>M</div>
              <div className='border-2 border-gray-500 text-gray-600 rounded-md text-xs px-3 py-1 mr-2'>S</div>
            </div>
            <div className='flex flex-row justify-between'>
              <a href="# " className='bg-gradient-to-r from-red-600 to-pink-400 rounded-full py-2 lg:px-4 text-gray-50 flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
                Pre-Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default store