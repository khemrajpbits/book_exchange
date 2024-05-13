import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function index({ auth }) {

    // const [books, setBooks] = useState([]);
    const { books } = usePage().props;


    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('Error fetching books:', error));
    }, []);
    const [currentPage, setCurrentPage] = useState(books.current_page);

    const requestBook = (bookId) => {
        const requestData = {
            sender_id: auth.user.id,
            book_id: bookId,
            receiver_id: auth.user.id,
            request_status: 'pending',
            delivery_method: 'Couroir',
            duration: '4 Days Max',
            address: 'Vapi',
        };
        try {
            const response = fetch('/api/exchange_requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (!response.ok) {
                throw new Error('Failed to create book');
            } else {
                history.push('/exchange_requests');
            }
            // Redirect or handle success
        } catch (error) {
            console.error('Error creating book:', error);
            // Handle error
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book List</h2>
            }
        >
            <Head title="Books" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <a href={route('books.create')}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add Book
                        </button>
                    </a>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2">Title</th>
                                    <th class="px-4 py-2">Genre</th>
                                    <th class="px-4 py-2">Author</th>
                                    <th class="px-4 py-2">Book Condition</th>
                                    <th class="px-4 py-2">Availablity Status</th>
                                    <th class="px-4 py-2">Owner</th>
                                    <th class="px-4 py-2">Request For This Book</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.data && books.data.length === 0 ? (
                                    <tr>
                                        <td className="border px-4 py-2" colSpan="7">No books found.</td>
                                    </tr>
                                ) : (
                                    books.data && books.data.map(book => (
                                        <tr key={book.id}>
                                            <td className="border px-4 py-2" scope="row">
                                                <a href={route('books.edit', { book: book.id })}>{book.title}</a>
                                            </td>
                                            <td className="border px-4 py-2">{book.genre}</td>
                                            <td className="border px-4 py-2">{book.author}</td>
                                            <td className="border px-4 py-2">{book.book_condition}</td>
                                            <td className="border px-4 py-2">{book.availablity_status}</td>
                                            <td className="border px-4 py-2">{book.user ? book.user.name : '-'}</td>
                                            <td className="border px-4 py-2">
                                                <button onClick={() => requestBook(book.id)}>Request</button>
                                            </td>
                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-sm">
                                {books.prev_page_url && (
                                    <li>
                                        <Link
                                            href={books.prev_page_url}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >Previous</Link>
                                    </li>
                                )}
                                {books.links.map(link => (
                                    <li key={link.url}>
                                        <Link
                                            href={link.url}
                                            onClick={() => setCurrentPage(link.label)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : ''}`}
                                        >{link.label}</Link>
                                    </li>
                                ))}
                                {books.next_page_url && (
                                    <li>
                                        <Link
                                            href={books.next_page_url}
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >Next</Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
