import { Button, Modal } from 'flowbite-react';
import { CgShutterstock } from 'react-icons/cg';
import { FaUserGroup } from 'react-icons/fa6';
import { IoBedSharp } from 'react-icons/io5';

type Props = {
    openBookingModal: boolean,
    setOpenBookingModal: (value: boolean) => void,
}

const BookingModal = ({ openBookingModal, setOpenBookingModal }: Props) => {
    return (
        <>
            <Modal dismissible show={openBookingModal} onClose={() => setOpenBookingModal(false)}>
                <Modal.Header>Icon Saigon - Lifestyle Design</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className='w-full flex'>
                            <div className='w-20 h-20 mr-3 flex'>
                                <div className='w-full h-full relative'>
                                    <div className='opacity-0 transition-[opacity_500ms] top-0 left-0 right-0 w-full bottom-0 h-full flex z-[1] absolute items-center justify-center bg-[#EDF2F7]'></div>
                                    <div className='h-full'>
                                        <img src='https://img.tripi.vn/cdn-cgi/image/width=404,height=304/https://gcs.tripi.vn/hms_prod/photo/img/1621094526904Zs/226135027.jpg' alt='' className='rounded-[8px] absolute top-0 left-0 w-full h-full object-cover' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <p className='text-[16px] font-semibold leading-[19px] mb-1'>Deluxe Double Room (miễn phí Trà Chiều)</p>
                                <div className='text-[#4A5568] flex items-center text-[14px] font-normal leading-[17px] mt-2'>
                                    <div className='cursor-pointer flex items-center pr-6'>
                                        <FaUserGroup className='mr-2' />
                                        2 person
                                    </div>
                                    <div className='cursor-pointer flex items-center pr-6'>
                                        <IoBedSharp className='mr-2' />
                                        1 double bed
                                    </div>
                                    <div className='cursor-pointer flex items-center pr-6'>
                                        <CgShutterstock className='mr-2' />
                                        24m²
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="w-full">
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Check in date</label>
                                    <input className="w-full border rounded px-2 py-1" type="date" name="check_in_date" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Check out date</label>
                                    <input className="w-full border rounded px-2 py-1" type="date" name="check_out_date" />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Number of people</label>
                                    <input className="w-full border rounded px-2 py-1" type="number" name="number_of_people" min={1} />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Number of rooms</label>
                                    <input className="w-full border rounded px-2 py-1" type="number" name="number_of_rooms" min={1} />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-[#86B817]' onClick={() => setOpenBookingModal(false)}>Book now</Button>
                    <Button color="gray" onClick={() => setOpenBookingModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookingModal
