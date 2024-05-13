import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function index({ auth }) {

    const { users } = usePage().props;


    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching user:', error));
    }, []);
    // const [currentPage, setCurrentPage] = useState(user.current_page);
console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User List</h2>
            }
        >
            <Head title="Books" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2">Name</th>
                                    <th class="px-4 py-2">Email</th>
                                    <th class="px-4 py-2">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data && users.data.length === 0 ? (
                                    <tr>
                                        <td className="border px-4 py-2" colSpan="7">No user found.</td>
                                    </tr>
                                ) : (
                                    users.data && users.data.map(user => (
                                        <tr key={user.id}>
                                            <td className="border px-4 py-2" scope="row">
                                                <a href={route('profile.edit', { user: user.id })}>{user.name}</a>
                                            </td>
                                            <td className="border px-4 py-2" scope="row">
                                               {user.email}
                                            </td>
                                            <td className="border px-4 py-2" scope="row">
                                               {user.created_at}
                                            </td>
                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-sm">
                                {users.prev_page_url && (
                                    <li>
                                        <Link
                                            href={users.prev_page_url}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >Previous</Link>
                                    </li>
                                )}
                                {users.links.map(link => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            onClick={() => setCurrentPage(link.label)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : ''}`}
                                        >{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
