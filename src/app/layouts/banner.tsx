import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full mx-auto bg-[url('/src/assets/images/bg-banner.png')] bg-center bg-no-repeat bg-cover py-5 mb-5 h-[592.8px] items-center flex">
            <div className='container mx-auto py-5'>
                <div className="py-5 mt-20 justify-center flex flex-wrap">
                    <div className="pt-5 mt-5 text-center w-5/6">
                        <div className="w-full border-none rounded-lg shadow-lg flex p-2 relative bg-white items-center justify-between">
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
                        <div className="text-white flex pt-6 flex-col w-full mx-auto">
                            <span className="text-[26px] max-w-[566px] font-semibold leading-[36px] text-left">Log in to receive more incentives and many attractive offers when booking hotels.</span>
                            <div className="w-fit mt-6">
                                <button type="submit" className="w-[198px] h-11 text-base font-semibold leading-[19px] rounded-lg text-white bg-[#86B817]" onClick={() => navigate('/login')} > Register / Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
