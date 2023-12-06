import { Button, Modal } from 'flowbite-react';

type Props = {
    openEditRoomModal: boolean,
    setOpenEditRoomModal: (value: boolean) => void,
}

const EditRoomModal = ({ openEditRoomModal, setOpenEditRoomModal }: Props) => {
    return (
        <>
            <Modal dismissible show={openEditRoomModal} onClose={() => setOpenEditRoomModal(false)}>
                <Modal.Header>Edit Room</Modal.Header>
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
                                    <select className="w-full border border-solid border-gray-700 rounded px-2 py-1" name="hotel_name">
                                        <option value="hotelA">Hotel A</option>
                                        <option value="hotelB">Hotel B</option>
                                        <option value="hotelA">Hotel C</option>
                                        <option value="hotelB">Hotel D</option>
                                    </select>
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Type</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="text" name="number_of_rooms"/>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Status</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="text" name="number_of_people" />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Price</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="number" name="number_of_rooms" />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Quantity</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" type="number" name="number_of_rooms" />
                                </div>
                                <div className="w-1/2 ml-2"></div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-full">
                                    <label className="block mb-2">Description</label>
                                    <textarea className="w-full border border-solid border-gray-700 rounded px-2 py-1"  name="number_of_people" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-[#86B817]' onClick={() => setOpenEditRoomModal(false)}>Edit</Button>
                    <Button color="gray" onClick={() => setOpenEditRoomModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditRoomModal
