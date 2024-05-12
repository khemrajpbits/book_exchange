import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';


export default function index({ auth }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book List</h2>
            }
        >
            <Head title="All Books" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <a href={route('books.create')}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Add Book
                        </button>
                    </a>
                    <div class="table-responsive">
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2">Title</th>
                                    <th class="px-4 py-2">Genre</th>
                                    <th class="px-4 py-2">author</th>
                                    <th class="px-4 py-2">book_condition</th>
                                    <th class="px-4 py-2">availablity_status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr>
                                        <td class="border px-4 py-2" scope="row" key={book.id}>
                                            <a href={route('books.edit', { book: book.id })}> {book.title}</a>
                                        </td>
                                        <td class="border px-4 py-2">{book.genre}</td>
                                        <td class="border px-4 py-2">{book.author}</td>
                                        <td class="border px-4 py-2">{book.book_condition}</td>
                                        <td class="border px-4 py-2">{book.availablity_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
