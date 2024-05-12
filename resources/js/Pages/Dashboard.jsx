import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book Exchange Platform</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative">
                        <h1 className="text-3xl font-bold text-center mb-4"></h1>
                        <hr className="border-t border-gray-300 mb-4" />
                        <img src="https://americanbookco.com/wp-content/uploads/2021/02/stacked-books.jpeg" alt="Your Image" className="w-full" />
                        <ul className="absolute top-1/3 left-0 transform -translate-y-1/2 text-center">
                            <li className="mb-2"><a href={route('books.index')} className="block px-4 py-2 bg-black text-white rounded">Book Listing & Searching</a></li>
                            <li className="mb-2"><a to="/exchangeRequests" className="block px-4 py-2 bg-black text-white rounded">Exchange Requests</a></li>
                            <li className="mb-2"><a href={route('profile.edit')} className="block px-4 py-2 bg-black text-white rounded">User Profiles</a></li>
                        </ul>

                    </div>
                </div>
            </div>
               
        </AuthenticatedLayout>
    );
}
