import { Button, Modal } from 'flowbite-react';

type Props = {
    openCreateHotelModal: boolean,
    setOpenCreateHotelModal: (value: boolean) => void,
}

const CreateHotelModal = ({ openCreateHotelModal, setOpenCreateHotelModal }: Props) => {
    return (
        <>
            <Modal dismissible show={openCreateHotelModal} onClose={() => setOpenCreateHotelModal(false)}>
                <Modal.Header>Add Hotel</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form className="w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image:</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="border rounded p-2 mb-4"
                            />
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Hotel Name</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="text" name="number_of_rooms"/>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Address</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="text" name="number_of_rooms"/>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Phone Number</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type='number' name="number_of_people" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Status</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="text" name="number_of_rooms" />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-full">
                                    <label className="block mb-2">Description</label>
                                    <textarea className="w-full border border-solid border-gray-700 rounded px-2 py-1" name="number_of_people" />
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-[#86B817]' onClick={() => setOpenCreateHotelModal(false)}>Create </Button>
                    <Button color="gray" onClick={() => setOpenCreateHotelModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateHotelModal
