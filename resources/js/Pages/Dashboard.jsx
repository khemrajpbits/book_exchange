import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book Exchange Platform</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ul className="flex">
                        <div>
                            <li className="m-2 border border-4 rounded px-6 py-4 text-center">
                                Users<br></br>
                                <span>
                                    {data.users}
                                </span>
                            </li>
                            <li  className="m-2 border border-4 rounded px-6 py-4 text-center">Rejected Requests<br></br>
                                <span>
                                {data.exchange_request_rejected}
                                </span>
                            </li>
                        </div>
                        <div>
                            <li className="m-2 border border-4 rounded px-6 py-4 text-center">Books<br></br>
                                <span>
                                {data.books}
                                </span>
                            </li>
                            <li className="m-2 border border-4 rounded px-6 py-4 text-center">Approved Requests<br></br>
                                <span>
                                {data.exchange_request_approved}
                                </span>
                            </li>
                        </div>
                        <div>
                            <li className="m-2 border border-4 rounded px-6 py-4 text-center">Total Requests<br></br>
                                <span>
                                {data.exchange_request}
                                </span>
                            </li>
                            <li className="m-2 border border-4 rounded px-6 py-4 text-center">Pending Requests<br></br>
                                <span>
                                {data.exchange_request_pending}
                                </span>
                            </li>
                        </div>
                    </ul>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small_2x/old-book-watercolor-illustration-png.png" width="35%"></img>
            </div>
               
        </AuthenticatedLayout>
    );
}
