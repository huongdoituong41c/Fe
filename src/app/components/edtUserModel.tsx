import { Button, Modal } from 'flowbite-react';
import React, { DetailedHTMLProps, ReactComponentElement, useState, useEffect } from 'react'

interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    role: string;
    //   tags: string[];
}


type Props = {
    openEditHotelModal: boolean,
    setOpenEditHotelModal: (value: boolean) => void,
    onClickEdit: (value: any, dataProp: any) => void,
    currentId: String | undefined,
    currentValue: DataType | undefined

}

const EditUserModal = ({ openEditHotelModal, setOpenEditHotelModal, onClickEdit, currentId, currentValue }: Props) => {
    const [firstName, setFirstName] = useState<any>(currentValue?.firstName)
    const [lastName, setLastName] = useState<string | undefined>(currentValue?.lastName)
    const [email, setEmail] = useState<string | undefined>(currentValue?.email)
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(currentValue?.phoneNumber)
    const [role, setRole] = useState<string | undefined>(currentValue?.role)
    useEffect(() => {
        setFirstName(currentValue?.firstName)
        setLastName(currentValue?.lastName)
        setEmail(currentValue?.email)
        setPhoneNumber(currentValue?.phoneNumber)
        setRole(currentValue?.role)
    }, [openEditHotelModal,setOpenEditHotelModal])

    return (
        <>
            <Modal dismissible show={openEditHotelModal} onClose={() => setOpenEditHotelModal(false)}>
                <Modal.Header>Edit User</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form className="w-full">

                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">First Name</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }} value={firstName} type='text' />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Last Name</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1"
                                        onChange={(e) => {
                                            setLastName(e.target.value)
                                        }}
                                        value={lastName} type='text'
                                    />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                    <label className="block mb-2">Phone Number</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1" onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}
                                        value={phoneNumber} type='text'

                                    />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <label className="block mb-2">Email</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        value={email} type='text'
                                    />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-2">
                                <label className="block mb-2">Role</label>
                                    <input className="w-full border border-solid border-gray-700 rounded px-2 py-1"
                                        onChange={(e) => {
                                            setRole(e.target.value)
                                        }}
                                        value={role} type='text'
                                    />
                                </div>
                                <div className="w-1/2 ml-2">
                                    
                                </div>
                            </div>
              
                                            
                        </form>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-[#86B817]' onClick={() => onClickEdit(currentId, {
                        key: currentId,
                        firstName,
                        lastName,
                        role,
                        email,
                        phoneNumber
                    })}>Edit </Button>
                    <Button color="gray" onClick={() => setOpenEditHotelModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditUserModal
