import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function index({ auth }) {
    // const [exchangeRequests, setBooks] = useState([]);
    const [exchangeRequests, setExchangeRequests] = useState([]);


    useEffect(() => {
        fetch('/api/exchange_requests')
            .then(response => response.json())
            .then(data => setExchangeRequests(data))
            .catch(error => console.error('Error fetching exchange requests:', error));
    }, []);


    const deleteRequest = async (exchangeRequestId) => {
        try {
            const response = await fetch(`/api/exchange_requests/delete/${exchangeRequestId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to Delete Exchange Request');
            }
            // Refresh the exchange request list after successful deletion
            const updatedExchangeRequests = exchangeRequests.filter(request => request.id !== exchangeRequestId);
            setExchangeRequests(updatedExchangeRequests);
            visit(window.location.href, { method: 'get' });
        } catch (error) {
            console.error('Error deleting exchange request:', error);
            // Handle error
        }
    };

    const approveRequest = async (exchangeRequestId) => {
        try {
            const response = await fetch(`/api/exchange_requests/approve/${exchangeRequestId}`, {
                method: 'PATCH', // Use PATCH method for updating
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to Approve Exchange Request');
            }
            // Redirect to the exchange requests page after approval
            history.push('/exchange_requests');
            visit(window.location.href, { method: 'get' });
        } catch (error) {
            console.error('Error approving exchange request:', error);
            // Handle error
        }
    };
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
                                {exchangeRequests.data && exchangeRequests.data.length === 0 ? (
                                    <tr>
                                        <td className="border px-4 py-2" colSpan="8">No exchangeRequests found.</td>
                                    </tr>
                                ) : (
                                    exchangeRequests.data && exchangeRequests.data.map(exchangeRequest => (
                                        <tr>
                                            <td class="border px-4 py-2">{exchangeRequest.sender.name}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.receiver && exchangeRequest.receiver.name}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.book.title}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.request_status}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.delivery_method}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.address}</td>
                                            <td class="border px-4 py-2">{exchangeRequest.duration}</td>
                                            <td class="border px-4 py-2">
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    onClick={() => deleteRequest(exchangeRequest.id)} // Call deleteRequest with exchange request ID
                                                >Delete</button>
                                                <button
                                                    type="button"
                                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    onClick={() => approveRequest(exchangeRequest.id)} // Call approveRequest with exchange request ID
                                                >Approve</button>
                                            </td>
                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                        {/* <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-sm">
                                {exchangeRequests.prev_page_url && (
                                    <li>
                                        <Link
                                            href={exchangeRequests.prev_page_url}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >Previous</Link>
                                    </li>
                                )}
                                {exchangeRequests.links.map(link => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            onClick={() => setCurrentPage(link.label)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : ''}`}
                                        >{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
