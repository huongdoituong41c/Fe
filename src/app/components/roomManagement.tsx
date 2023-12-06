import {
    AiFillPlusCircle,
    AiOutlineDelete,
    AiOutlineEdit,
  } from "react-icons/ai"
  import { Table } from "flowbite-react"
import { useState } from "react"
import CreateRoomModal from "./createRoomModal"
import EditRoomModal from "./editRoomModel"
import DeleteModal from "./deleteModal"
  
  const RoomManagement = () => {
    const roomData = [
        {
            id: 1,
            hotelName: "Hotel A",
            image: "https://ardeco.vn/files/editor/phan-chia-cac-loai-hinh-khach-san-1.jpg",
            type: "Double room",
            description: "A beautiful hotel with great amenities.",
            price: "$150 per night",
            quantity: "5",
            status: "Active",
        },
        {
            id: 2,
            hotelName: "Hotel A",
            image: "https://ardeco.vn/files/editor/phan-chia-cac-loai-hinh-khach-san-1.jpg",
            type: "Single room",
            description: "A beautiful hotel with great amenities.",
            price: "$150 per night",
            quantity: "4",
            status: "Active",
        },
        {
            id: 3,
            hotelName: "Hotel A",
            image: "https://ardeco.vn/files/editor/phan-chia-cac-loai-hinh-khach-san-1.jpg",
            type: "Single room",
            description: "A beautiful hotel with great amenities.",
            price: "$150 per night",
            quantity: "6",
            status: "Active",
        },
        {
            id: 4,
            hotelName: "Hotel A",
            image: "https://ardeco.vn/files/editor/phan-chia-cac-loai-hinh-khach-san-1.jpg",
            type: "Single room",
            description: "A beautiful hotel with great amenities.",
            price: "$150 per night",
            quantity: "1",
            status: "Active",
        },
    ]

    const [opencreateModal, setOpenCreateRoomModal] = useState<boolean>(false)
    const [openEditModal, setOpenEditRoomModal] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
  
    const handleEdit = (hotelId: any) => {
      console.log(`Edit hotel with ID ${hotelId}`)
    }
  
    const handleDelete = (hotelId: any) => {
      console.log(`Delete hotel with ID ${hotelId}`)
    }
  
    return (
      <div className="mt-5 flex justify-center rounded-md">
        <div className="mt-5 px-4 py-4 bg-white w-[1350px]">
          <div className="text-center">
            <h6 className="text-center px-3 relative inline-block uppercase bg-white text-[#86B817] text-[1rem] mt-0 mb-2 font-extrabold leading-[1.2]">
              ミ★Hotel★彡
            </h6>
            <h1 className="mb-5 text-[2.5rem] mt-0 font-extrabold leading-[1.2] text-[#2C3E50]">
              Room Management
            </h1>
          </div>
          <div className="grid grid-cols-3 justify-end pt-5">
            <h1 className="col-span-1 text-3xl pl-6 text-black font-semibold">
              All Room
            </h1>
            <div className="col-span-1">
              <input
                placeholder="Search"
                className="bg-gray-200 h-10 px-6 rounded-full w-full mx-3"
              />
            </div>
            <div className="col-span-1 flex justify-end ml-20 items-center ">
              <button
                onClick={() => setOpenCreateRoomModal(true)}
                className="flex w-30 items-center justify-center h-8 px-5 rounded-md bg-[#135846] text-white space-x-1.5 hover:text-white col-span-2"
                uk-toggle="target: #create-post-modal"
              >
                <AiFillPlusCircle className="text-white" />
                <span>Add Room</span>
              </button>
            </div>
          </div>
          <div>
            <div className="w-full mt-7">
              <Table hoverable className="shadow-lg">
                <Table.Head>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell className="text-center">Hotel Name</Table.HeadCell>
                  <Table.HeadCell className="text-center">Type</Table.HeadCell>
                  <Table.HeadCell className="text-center">Description</Table.HeadCell>
                  <Table.HeadCell className="text-center">Price</Table.HeadCell>
                  <Table.HeadCell className="text-center">Status</Table.HeadCell>
                  <Table.HeadCell className="text-center">Quantity</Table.HeadCell>
                  <Table.HeadCell className="text-center">Option</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {roomData.map((hotel) => (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <img
                          src={hotel.image}
                          className="w-20 h-20 object-cover mx-auto"
                          alt=""
                        />
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.hotelName}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.type}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.description}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.price}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.status}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        {hotel.quantity}
                      </Table.Cell>
                      <Table.Cell className="text-center">
                        <div className="flex space-x-2 justify-center">
                          <button
                            className="text-blue-500"
                            onClick={() => {
                                handleEdit(hotel.id); 
                                setOpenEditRoomModal(true)}
                            }
                          >
                            <AiOutlineEdit />
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => {
                              handleEdit(hotel.id); 
                              setOpenModal(true)}
                          }
                          >
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
  
              <div className="flex justify-between items-center pl-6">
                <div className="flex items-center">
                  <span className="mr-2">Display:</span>
                  <select className="border rounded p-1">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <span className="ml-2">Item</span>
                </div>
                <div className="flex flex-col items-center my-12 mr-4">
                  <div className="flex text-gray-700">
                    <div className="h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left w-4 h-4"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </div>
                    <div className="flex h-8 font-medium ">
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        1
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in border-b-2 border-orange-600">
                        2
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        3
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        ...
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        13
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        14
                      </div>
                      <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">
                        15
                      </div>
                      <div className="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-orange-600">
                        2
                      </div>
                    </div>
                    <div className="h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-right w-4 h-4"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateRoomModal openCreateRoomModal={opencreateModal} setOpenCreateRoomModal={setOpenCreateRoomModal} />
        <EditRoomModal openEditRoomModal={openEditModal} setOpenEditRoomModal={setOpenEditRoomModal} />
        <DeleteModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    )
  }
  
  export default RoomManagement
  