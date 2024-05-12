import dummy from './DummyData';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function index({ auth }) {
    // const [dummyData, setDummyData] = useState(dummy);


    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5;
    // const totalPages = Math.ceil(dummyData.length / itemsPerPage);


    // const currentItems = dummyData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);


    // const paginationButtons = Array.from({ length: totalPages }, (_, i) => (
    //     <li key={i}>
    //         <button
    //             className={`${currentPage === i + 1 ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-gray-200 text-gray-700'
    //                 } px-3 py-2 mx-1 rounded`}
    //             onClick={() => paginate(i + 1)}
    //             disabled={currentPage === i + 1}
    //         >
    //             {i + 1}
    //         </button>
    //     </li>
    // ));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 class="font-semibold text-xl text-gray-800 leading-tight">Exchange Request List</h2>}
        >
            <div className="container mx-auto pt-8 pb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold"></h2>

                    <a href={route('exchange_requests.create')} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                        Create Exchange
                    </a>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">SENDER_ID</th>
                                <th className="px-4 py-2">RECEIVER_ID</th>
                                <th className="px-4 py-2">BOOK_ID</th>
                                <th className="px-4 py-2">REQUEST_STATUS</th>
                                <th className="px-4 py-2">DELIVERY_METHOD</th>
                                <th className="px-4 py-2">ADDRESS</th>
                                <th className="px-4 py-2">DURATION</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
