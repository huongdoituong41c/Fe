import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Space, Tag } from 'antd';

import { Table } from "flowbite-react"
import type { ColumnsType } from 'antd/es/table';
import Header from '../../layouts/header';
import Navbar from '../../layouts/navbar';
import {
    AiFillPlusCircle,
    AiOutlineDelete,
    AiOutlineEdit,
} from "react-icons/ai"
import Footer from '../../layouts/footer';
import Banner from '../../layouts/banner';
import EditUserModal from '../../components/edtUserModel';

interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    role: string;
    //   tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'FIRST NAME',
        dataIndex: 'firstName',
        key: 'firstName',
        // render: (text) => <img src={`${text}`}/>,
    },
    {
        title: 'LAST NAME',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'PHONE NUMBER',
        dataIndex: 'phoneNumber',
        key: 'phonenumber',
    },

    {
        title: 'EMAIL',
        dataIndex: 'email',
        key: 'email',
    },

    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',

    },

    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },

];

const data: DataType[] = [
    {
        key: '1',
        firstName: 'Long',
        lastName: "Tran",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "User",

    },

    {
        key: '2',
        firstName: 'Cong',
        lastName: "Duong",
        phoneNumber: "0789456123",
        email: "trancong@gmail.com",
        role: "User"

    },

    {
        key: '3',
        firstName: 'Phong',
        lastName: "Nguyen",
        phoneNumber: "0888285129",
        email: "nguyenphong@gmail.com",
        role: "User"

    },

    {
        key: '4',
        firstName: 'Son',
        lastName: "Bui",
        phoneNumber: "0888285129",
        email: "buisong@gmail.com",
        role: "Admin"

    },

    {
        key: '5',
        firstName: 'Hong',
        lastName: "Tran",
        phoneNumber: "0888285129",
        email: "tranhong@gmail.com",
        role: "Admin"

    },

    {
        
        key: '6',
        firstName: 'Lien',
        lastName: "Tran",
        phoneNumber: "0888285129",
        email: "tranlien@gmail.com",
        role: "User",

    },

    {
        key: '7',
        firstName: 'Le',
        lastName: "Tran",
        phoneNumber: "0888285129",
        email: "tranle@gmail.com",
        role: "Admin"

    },

    {
        key: '8',
        firstName: 'Long',
        lastName: "Nguyen",
        phoneNumber: "0888285129",
        email: "nguyenlong@gmail.com",
        role: "User"

    },

    {
        key: '9',
        firstName: 'Long',
        lastName: "Ho",
        phoneNumber: "0888285129",
        email: "holong@gmail.com",
        role: "User",

    },

    {
        key: '10',
        firstName: 'Long',
        lastName: "Pham",
        phoneNumber: "0888285129",
        email: "phamlong@gmail.com",
        role: "Admin",

    },

    {
        key: '11',
        firstName: 'Long',
        lastName: "Hung",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "User"

    },

    {
        key: '12',
        firstName: 'Long',
        lastName: "Cao",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "Admin"

    },

    {
        key: '13',
        firstName: 'Long',
        lastName: "Le",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "User"

    },

    {
        key: '14',
        firstName: 'Truong',
        lastName: "Tan",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "Admin"

    },

    {
        key: '15',
        firstName: 'Ngo',
        lastName: "Hanh",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "Admin",

    },

    {
        key: '16',
        firstName: 'Ngo',
        lastName: "Truong",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "Admin",

    },

    {
        key: '17',
        firstName: 'Ngo',
        lastName: "Phuong",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "User",

    },


    {
        key: '18',
        firstName: 'Ngo',
        lastName: "lam",
        phoneNumber: "0888285129",
        email: "tranlong@gmail.com",
        role: "User",

    },




];
const tempData: DataType[] = [{
    key: '1',
    firstName: 'Long',
    lastName: "Tran",
    phoneNumber: "0888285129",
    email: "tranlong@gmail.com",
    role: "User",

},

{
    key: '2',
    firstName: 'Cong',
    lastName: "Duong",
    phoneNumber: "0789456123",
    email: "trancong@gmail.com",
    role: "User"

},

{
    key: '3',
    firstName: 'Phong',
    lastName: "Nguyen",
    phoneNumber: "0888285129",
    email: "nguyenphong@gmail.com",
    role: "User"

},

{
    key: '4',
    firstName: 'Son',
    lastName: "Bui",
    phoneNumber: "0888285129",
    email: "buisong@gmail.com",
    role: "Admin"

},

{
    key: '5',
    firstName: 'Hong',
    lastName: "Tran",
    phoneNumber: "0888285139",
    email: "tranhong@gmail.com",
    role: "Admin"
},

{
    key: '6',
    firstName: 'Hong',
    lastName: "Le",
    phoneNumber: "0888285149",
    email: "tranhong@gmail.com",
    role: "User"
}

]


const AdminUser: any = () => {
    const [userData, setUserData] = useState(tempData)

    const [currentIdEdit, setCurrentIdEdit] = useState<String>("");
    const [currentUserEdit, setCurrentUserEdit] = useState<DataType>({
        email:'',
        firstName:'',
        lastName:'',
        phoneNumber:'',
        role:'',
        key:'',
    });
    const [prevUserdata, setPrevUserData] = useState()
    const [openEditModal, setOpenEditUserModal] = useState<boolean>(false)

    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
    const showModal = () => {
        setIsCreateUserModalOpen(true);
    };

    const handleOk = () => {
        setIsCreateUserModalOpen(false);
    };

    const handleCancel = () => {
        setIsCreateUserModalOpen(false);
    };
    const handleEdit = (id: String, userDataProps: DataType) => {
        const temptUserData: DataType[] = userData.map((dataValue: DataType) => {
            if (Number(id) === Number(dataValue.key)) {
                return {
                    ...userDataProps
                }
            } else {
                return {
                    ...dataValue
                }
            }
        })
        setUserData(temptUserData)
        setOpenEditUserModal(false)
    }
    const handleDelete = (id: String) => {
        const userDataMap = userData.filter((data) => Number(data.key) !== Number(id))
        setUserData(userDataMap)
    }

    return (
        <>
            <Modal title="Add User" open={isCreateUserModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>FirstName:</p>
                <p>lastName:</p>
                <p>phoneNumber:</p>
            </Modal>
            <Header />
            <Navbar />
            <Banner />
            <div className="mt-5 flex justify-center rounded-md">


                <div className="mt-5 px-4 py-4 bg-white w-[1350px]">
                    <div className="text-center">
                        <h6 className="text-center px-3 relative inline-block uppercase bg-white text-[#86B817] text-[1rem] mt-0 mb-2 font-extrabold leading-[1.2]">
                            ミ★Hotel★彡
                        </h6>
                        <h1 className="mb-5 text-[2.5rem] mt-0 font-extrabold leading-[1.2] text-[#2C3E50]">
                            User Management
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 justify-end mb-7">
                        <h1 className="col-span-1 text-3xl pl-6 text-black font-semibold">
                            All User
                        </h1>
                        <div className="col-span-1">
                            <input

                                placeholder="Search"
                                className="bg-gray-200 h-10 px-6 rounded-full w-full mx-3"
                            />
                        </div>
                        {/* <div className="col-span-1 flex justify-end mr-3 items-center">
                            <a
                               onClick={showModal}
                               href="#"
                                className="flex w-30 items-center justify-center h-8 px-5 rounded-md bg-[#135846] text-white space-x-1.5 hover:text-white col-span-2"
                                uk-toggle="target: #create-post-modal"
                            >
                                <AiFillPlusCircle className="text-white" />
                                <span>Add User</span>
                            </a>
                        </div> */}
                    </div>
                    <Table hoverable className="shadow-lg">
                        <Table.Head className='py-25'>
                            <Table.HeadCell className="text-center" >FIRST NAME</Table.HeadCell>
                            <Table.HeadCell className="text-center">LAST NAME</Table.HeadCell>
                            <Table.HeadCell className="text-center">PHONE NUMBER</Table.HeadCell>
                            <Table.HeadCell className="text-center">EMAIL</Table.HeadCell>
                            <Table.HeadCell className="text-center">ROLE</Table.HeadCell>
                            <Table.HeadCell className="text-center">ACTION</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {userData.map((user, index) => (
                                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                    <Table.Cell className="text-center">
                                        {user.firstName}
                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                        {user.lastName}
                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                        {user.phoneNumber}
                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                        {user.email}

                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                        {user.role}
                                    </Table.Cell>
                                    <Table.Cell className="text-center">
                                        <div className="flex space-x-2 justify-center">
                                            <button
                                                className="text-blue-500"
                                                onClick={() => {
                                                    setCurrentUserEdit(user)
                                                    setCurrentIdEdit(user.key)
                                                    setOpenEditUserModal(true)
                                                }
                                                }
                                            >
                                                <AiOutlineEdit />
                                            </button>
                                            <button
                                                className="text-red-500"
                                                onClick={() => {
                                                    // handleEdit(hotel.id); 
                                                    // setOpenModal(true)
                                                    handleDelete(user.key)
                                                }
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
                    {/* Phân trang */}
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
                                    <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent border-orange-600"
                                        onClick={() => {

                                            // const testArray = data
                                            // testArray.splice(5, data.length)
                                            // setUserData(testArray)
                                            setUserData(tempData)
                                        }}>
                                        1
                                    </div>
                                    <div className="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in border-b-2" onClick={() => {
                                        setUserData(data)
                                    }}>
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
            <EditUserModal openEditHotelModal={openEditModal} setOpenEditHotelModal={setOpenEditUserModal} onClickEdit={handleEdit} currentId={currentIdEdit} currentValue={
                currentUserEdit
            } />
            <Footer></Footer>

        </>
    )

};

export default AdminUser;