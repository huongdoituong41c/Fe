import { FaLocationDot, FaCalendarDays, FaUser, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hotel = () => {
    const navigate = useNavigate()

    return (
        <div className='py-5 w-full mx-auto'>
            <div className='w-[1320px] mx-auto'>
                <div className="text-center">
                    <h6 className="text-center px-3 relative inline-block uppercase bg-white text-[#86B817] text-[1rem] mt-0 mb-2 font-extrabold leading-[1.2]">ミ★Hotel★彡</h6>
                    <h1 className="mb-5 text-[2.5rem] mt-0 font-extrabold leading-[1.2] text-[#2C3E50]">Awesome Hotel</h1>
                </div>
                <div className="grid grid-cols-3 gap-4 justify-center py-5">
                    <div className="flex flex-[0_0_auto] w-full">
                        <div className="shadow-[0_0_45px_rgba(0,0,0,.08)]">
                            <div className="overflow-hidden">
                                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/383601935.jpg?k=5d11cf03399474c0e756c556150cc422eaea38a356d9324856f972eb733827d0&o=" alt="" className="w-full h-[272px] object-cover" />
                            </div>
                            <div className="border-b grid grid-cols-3">
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaLocationDot className='font-black text-[#86B817!important] mr-2' />
                                    Vietnam
                                </small>
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaCalendarDays className='font-black text-[#86B817!important] mr-2' />
                                    3 days
                                </small>
                                <small className="items-center py-2 flex justify-center">
                                    <FaUser className='font-black text-[#86B817!important] mr-2' />
                                    5 person
                                </small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0 text-[1.75rem] font-extrabold leading-[1.2] text-[#2C3E50]">Icon Saigon - Lifestyle Design</h3>
                                <div className="mb-3 flex items-center justify-center">
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                </div>
                                <p>Icon Saigon - LifeStyle Design Hotel, which brings you a classy experience with top amenities and services.</p>
                                <button className="mt-4 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-12" onClick={() => navigate('/detail')}>Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-[0_0_auto] w-full">
                        <div className="shadow-[0_0_45px_rgba(0,0,0,.08)]">
                            <div className="overflow-hidden">
                                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/383601935.jpg?k=5d11cf03399474c0e756c556150cc422eaea38a356d9324856f972eb733827d0&o=" alt="" className="w-full h-[272px] object-cover" />
                            </div>
                            <div className="border-b grid grid-cols-3">
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaLocationDot className='font-black text-[#86B817!important] mr-2' />
                                    Vietnam
                                </small>
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaCalendarDays className='font-black text-[#86B817!important] mr-2' />
                                    3 days
                                </small>
                                <small className="items-center py-2 flex justify-center">
                                    <FaUser className='font-black text-[#86B817!important] mr-2' />
                                    5 person
                                </small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0 text-[1.75rem] font-extrabold leading-[1.2] text-[#2C3E50]">Icon Saigon - Lifestyle Design</h3>
                                <div className="mb-3 flex items-center justify-center">
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                </div>
                                <p>Icon Saigon - LifeStyle Design Hotel, which brings you a classy experience with top amenities and services.</p>
                                <button className="mt-4 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-12">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-[0_0_auto] w-full">
                        <div className="shadow-[0_0_45px_rgba(0,0,0,.08)]">
                            <div className="overflow-hidden">
                                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/383601935.jpg?k=5d11cf03399474c0e756c556150cc422eaea38a356d9324856f972eb733827d0&o=" alt="" className="w-full h-[272px] object-cover" />
                            </div>
                            <div className="border-b grid grid-cols-3">
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaLocationDot className='font-black text-[#86B817!important] mr-2' />
                                    Vietnam
                                </small>
                                <small className="items-center py-2 flex border-r justify-center">
                                    <FaCalendarDays className='font-black text-[#86B817!important] mr-2' />
                                    3 days
                                </small>
                                <small className="items-center py-2 flex justify-center">
                                    <FaUser className='font-black text-[#86B817!important] mr-2' />
                                    5 person
                                </small>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="mb-0 text-[1.75rem] font-extrabold leading-[1.2] text-[#2C3E50]">Icon Saigon - Lifestyle Design</h3>
                                <div className="mb-3 flex items-center justify-center">
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                    <small className="items-center py-2 flex mr-2">
                                        <FaStar className='font-black text-[#86B817!important]' />
                                    </small>
                                </div>
                                <p>Icon Saigon - LifeStyle Design Hotel, which brings you a classy experience with top amenities and services.</p>
                                <button className="mt-4 font-semibold px-3 bg-[#86B817] border-[#86B817] leading-[1.5] text-center align-middle cursor-pointer select-none border rounded-lg text-white h-12">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel
