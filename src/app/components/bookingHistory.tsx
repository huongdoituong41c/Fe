import React, { useState } from 'react'

const BookingHistory = () => {
    const [bookings, setBookings] = useState([
        {
            id: 1,
            hotel: "Hilton Garden Inn",
            checkInDate: "01/12/2023",
            checkOutDate: "03/12/2023",
            roomType: "Deluxe Room",
            numberOfPeople: 2,
            numberOfRooms: 1,
            status: "Confirmed",
        },
        {
            id: 2,
            hotel: "InterContinental",
            checkInDate: "05/12/2023",
            checkOutDate: "07/12/2023",
            roomType: "Suite",
            numberOfPeople: 4,
            numberOfRooms: 2,
            status: "Pending",
        },
        {
            id: 3,
            hotel: "Marriott",
            checkInDate: "10/12/2023",
            checkOutDate: "12/12/2023",
            roomType: "Executive Suite",
            numberOfPeople: 3,
            numberOfRooms: 1,
            status: "Cancelled",
        },
    ]);

    const handleCancel = (id: any) => {
        const booking = bookings.find((booking) => booking.id === id);
        if (!booking) return;
        if (booking.status === "Confirmed" || booking.status === "Pending") {
            setBookings((bookings) =>
                bookings.map((booking) =>
                    booking.id === id ? { ...booking, status: "Cancelled" } : booking
                )
            );
        }
    };

    return (
        <div className='py-20 w-full mx-auto'>
            <div className='w-[1320px] mx-auto'>
                <div className="text-center">
                    <h6 className="text-center px-3 relative inline-block uppercase bg-white text-[#86B817] text-[1rem] mt-0 mb-2 font-extrabold leading-[1.2]">ミ★Hotel★彡</h6>
                    <h1 className="mb-5 text-[2.5rem] mt-0 font-extrabold leading-[1.2] text-[#2C3E50]">Booking History</h1>
                </div>
                <table className="min-w-full table-auto shadow-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Hotel
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Check in date
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Check out date
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Room
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Number of rooms
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Number of people
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Status
                            </th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {bookings.map((booking: any) => (
                            <tr key={booking.id}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-900">
                                        {booking.hotel}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">
                                        {booking.checkInDate}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">
                                        {booking.checkOutDate}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">
                                        {booking.roomType}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">
                                        {booking.numberOfRooms}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-500">
                                        {booking.numberOfPeople}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span
                                        className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${booking.status === "Confirmed"
                                            ? "text-green-800 bg-green-100"
                                            : booking.status === "Pending"
                                                ? "text-yellow-800 bg-yellow-100"
                                                : "text-red-800 bg-red-100"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    {!(booking.status === 'Cancelled' || booking.status === "Confirmed") && (
                                        <button
                                            className="text-sm font-medium leading-5 text-red-500 hover:text-red-700"
                                            onClick={() => handleCancel(booking.id)}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BookingHistory
