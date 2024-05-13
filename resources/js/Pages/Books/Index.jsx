import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Avatar from '@/Components/Avatar';

const SuccessAlert = ({ setShowSuccess }) => (
    <div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div className="ms-3 text-sm font-medium">
            A simple success alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
        </div>
        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-3" aria-label="Close" onClick={() => setShowSuccess(false)}>
            <span className="sr-only">Dismiss</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>
);


export default function index({ auth }) {

    const [showSuccess, setShowSuccess] = useState(false);

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
            setShowSuccess(true);
            history.push('/exchange_requests');
        }
        // try {
        //     // Redirect or handle success
        // } catch (error) {
        //     console.error('Error creating book:', error);
        //     // Handle error
        // }
    };
    console.log(books);
    function stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
        return '#' + '00000'.substring(0, 6 - c.length) + c;
    };
return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book List</h2>
        }
    >
        <Head title="Books" />
        {showSuccess && <SuccessAlert setShowSuccess={setShowSuccess} />}
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('books.create')}>
                    <button class="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Book
                    </button>
                </Link>
                <div className="overflow-x-auto">
                    {/* <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            {books.data && books.data.length === 0 ? (
                                <span>Not Book Found</span>
                            ) : (
                                books.data && books.data.map(book => (
                                    <div class="">
                                        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                            <img
                                                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                                alt="card-image" class="object-cover w-full h-full" />
                                        </div>
                                        <div class="p-6">
                                            <div class="flex items-center justify-between mb-2">
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                    {book.title}
                                                </p>
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                    {book.availablity_status}
                                                </p>
                                            </div>
                                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                                {book.user ? book.user.name : '-'}
                                            </p>
                                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                                {book.genre}
                                            </p>
                                        </div>
                                        <div class="p-6 pt-0">
                                            <button
                                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                                type="button" onClick={() => requestBook(book.id)}>
                                                want this book?
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div> */}
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-cols-4">
                        {books.data && books.data.length === 0 ? (
                            <span>Not Book Found</span>
                        ) : (
                            books.data && books.data.map(book => (
                                <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl" key={book.id}>
                                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-50">
                                        {/* <img src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80" alt="card-image" class="object-cover w-full h-40" /> */}
                                        <div className={`h-12 w-12 p-2 rounded-full flex items-center justify-center`} style={{ backgroundColor: stringToColor(book.user.name.slice(0, 4)) }}>
                                            <span className="text-white font-semibold">
                                                {book.user.name ? book.user.name.slice(0, 2).toUpperCase() : ''}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="p-6">
                                        <div class="flex items-center justify-between mb-2">
                                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                {book.title}
                                            </p>
                                            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                                {book.availablity_status}
                                            </p>
                                        </div>
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                            {book.user ? book.user.name : '-'}
                                        </p>
                                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                            {book.genre}
                                        </p>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <button
                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                            type="button" onClick={() => requestBook(book.id)}>
                                            want this book?
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='mt-4 '>
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
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
);
}
