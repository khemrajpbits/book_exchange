import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function index({ auth }) {
    const [exchangeRequests, setBooks] = useState([]);

    useEffect(() => {
        fetch('/api/exchange_requests')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching exchange requests:', error));
    }, []);
    console.log(exchangeRequests);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 class="font-semibold text-xl text-gray-800 leading-tight">Exchange Request List</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Sender</th>
                                    <th className="px-4 py-2">Receiver</th>
                                    <th className="px-4 py-2">Book</th>
                                    <th className="px-4 py-2">Request Status</th>
                                    <th className="px-4 py-2">Delivery Method</th>
                                    <th className="px-4 py-2">Address</th>
                                    <th className="px-4 py-2">Duration</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exchangeRequests.map(exchangeRequest => (
                                    <tr>
                                        <td class="border px-4 py-2">{exchangeRequest.sender.name}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.receiver && exchangeRequest.receiver.name}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.book.title}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.request_status}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.delivery_method}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.address}</td>
                                        <td class="border px-4 py-2">{exchangeRequest.duration}</td>
                                        <td class="border px-4 py-2">
                                            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Approve</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
