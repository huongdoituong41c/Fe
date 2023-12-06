import React from 'react'
import Header from '../layouts/header'
import Navbar from '../layouts/navbar'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import Footer from '../layouts/footer'

const Search = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Navbar />
      <div className='py-5 w-full mx-auto'>
        <div className='w-[1320px] mx-auto'>
          <div className="w-full border-none rounded-lg shadow-lg flex p-2 relative bg-white items-center justify-between mb-6 mt-10">
            <form className="w-full flex">
              <div className="w-5/6 flex flex-row space-x-6">
                <div className="flex flex-col mb-4 w-2/6">
                  <label className="text-sm font-medium text-left">Address</label>
                  <input type="text" className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-[#86B817]" placeholder="Choose your address" />
                </div>
                <div className="flex flex-col mb-4 w-2/6">
                  <label className="text-sm font-medium text-left">Check in date</label>
                  <input type="date" className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-[#86B817]" />
                </div>
                <div className="flex flex-col mb-4 w-2/6">
                  <label className="text-sm font-medium text-left">Check out date</label>
                  <input type="date" className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-[#86B817]" />
                </div>
                <div className="flex flex-col mb-4 w-2/6">
                  <label className="text-sm font-medium text-left">Number of people</label>
                  <input type="number" className="w-full px-4 py-2 border-gray-300 rounded-md focus:border-[#86B817]" />
                </div>
              </div>
              <button type="submit" className="w-1/6 px-4 py-2 bg-[#86B817] text-white rounded-md ml-6 h-[42px] items-center mt-5 flex justify-center" onClick={() => navigate('/search')}>
                Search
                <FaSearch className='ml-2 w-[18px] h-[18px]' />
              </button>
            </form>
          </div>
          <div className='w-full bg-white p-6'>
            <div className='flex flex-col pb-6'>
              <span className='text-[24px] font-semibold leading-[32px] mb-1'>Ho Chi Minh City</span>
              <div className='text-[#718096] h-[17px] text-[14px] font-normal leading-[17px]'>181 hotels in Ho Chi Minh City</div>
            </div>
            <div className='w-full p-6 h-[250px] border rounded-lg shadow-lg flex space-x-4 mb-4'>
              <div className='flex w-[202px] h-full border'>
                <img src='https://img.tripi.vn/cdn-cgi/image/width=404,height=304/https://gcs.tripi.vn/hms_prod/photo/img/1621094526904Zs/226135027.jpg' alt='' className='w-full h-full object-cover' />
              </div>
              <div className='flex flex-col flex-1 w-full h-full'>
                <div className='w-full h-1/3 border-b border-b-gray-300 justify-between flex'>
                  <div className='flex-col items-center'>
                    <div className='flex flex-wrap text-[18px] max-w-[643px] items-center font-semibold leading-[21px] pb-[10px]'>
                      <h3 className='m-0 text-inherit'>Icon Saigon - Lifestyle Design</h3>
                    </div>
                    <div className='text-[#4A5568] flex items-center text-[14px] font-normal leading-[17px]'>
                      <div className='cursor-pointer flex items-center pr-6'>
                        <FaLocationDot className='mr-2 text-blue-500' />
                        65-67, Hai Bà Trưng, Quận 1, Hồ Chí Minh, Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full pt-2 h-full'>
                  <div className="leading-6 h-3/4 flex-wrap">Wander Catskills Creek is a modern sanctuary nestled within the woods and rolling terrain. Featured in the New York Times, this luxury home has floor-to-ceiling sliding glass doors seamlessly merging the interior with the expansive deck and the natural beauty of the surroundings. With bedrooms offering treehouse-like views and top-tier amenities like a private hot tub and state-of-the-art workstations, this retreat is the perfect place for a tranquil escape. </div>
                  <button className="mt-2 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-full w-fit" onClick={() => navigate('/detail')}>Read more</button>
                </div>
              </div>
            </div>
            <div className='w-full p-6 h-[250px] border rounded-lg shadow-lg flex space-x-4 mb-4'>
              <div className='flex w-[202px] h-full border'>
                <img src='https://img.tripi.vn/cdn-cgi/image/width=404,height=304/https://gcs.tripi.vn/hms_prod/photo/img/1621094526904Zs/226135027.jpg' alt='' className='w-full h-full object-cover' />
              </div>
              <div className='flex flex-col flex-1 w-full h-full'>
                <div className='w-full h-1/3 border-b border-b-gray-300 justify-between flex'>
                  <div className='flex-col items-center'>
                    <div className='flex flex-wrap text-[18px] max-w-[643px] items-center font-semibold leading-[21px] pb-[10px]'>
                      <h3 className='m-0 text-inherit'>Icon Saigon - Lifestyle Design</h3>
                    </div>
                    <div className='text-[#4A5568] flex items-center text-[14px] font-normal leading-[17px]'>
                      <div className='cursor-pointer flex items-center pr-6'>
                        <FaLocationDot className='mr-2 text-blue-500' />
                        65-67, Hai Bà Trưng, Quận 1, Hồ Chí Minh, Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full pt-2 h-full'>
                  <div className="leading-6 h-3/4 flex-wrap">Wander Catskills Creek is a modern sanctuary nestled within the woods and rolling terrain. Featured in the New York Times, this luxury home has floor-to-ceiling sliding glass doors seamlessly merging the interior with the expansive deck and the natural beauty of the surroundings. With bedrooms offering treehouse-like views and top-tier amenities like a private hot tub and state-of-the-art workstations, this retreat is the perfect place for a tranquil escape. </div>
                  <button className="mt-2 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-full w-fit">Read more</button>
                </div>
              </div>
            </div>
            <div className='w-full p-6 h-[250px] border rounded-lg shadow-lg flex space-x-4 mb-4'>
              <div className='flex w-[202px] h-full border'>
                <img src='https://img.tripi.vn/cdn-cgi/image/width=404,height=304/https://gcs.tripi.vn/hms_prod/photo/img/1621094526904Zs/226135027.jpg' alt='' className='w-full h-full object-cover' />
              </div>
              <div className='flex flex-col flex-1 w-full h-full'>
                <div className='w-full h-1/3 border-b border-b-gray-300 justify-between flex'>
                  <div className='flex-col items-center'>
                    <div className='flex flex-wrap text-[18px] max-w-[643px] items-center font-semibold leading-[21px] pb-[10px]'>
                      <h3 className='m-0 text-inherit'>Icon Saigon - Lifestyle Design</h3>
                    </div>
                    <div className='text-[#4A5568] flex items-center text-[14px] font-normal leading-[17px]'>
                      <div className='cursor-pointer flex items-center pr-6'>
                        <FaLocationDot className='mr-2 text-blue-500' />
                        65-67, Hai Bà Trưng, Quận 1, Hồ Chí Minh, Việt Nam
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full pt-2 h-full'>
                  <div className="leading-6 h-3/4 flex-wrap">Wander Catskills Creek is a modern sanctuary nestled within the woods and rolling terrain. Featured in the New York Times, this luxury home has floor-to-ceiling sliding glass doors seamlessly merging the interior with the expansive deck and the natural beauty of the surroundings. With bedrooms offering treehouse-like views and top-tier amenities like a private hot tub and state-of-the-art workstations, this retreat is the perfect place for a tranquil escape. </div>
                  <button className="mt-2 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-full w-fit">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Search
