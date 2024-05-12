import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function index({ auth, books }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book List</h2>
            }
        >
            <Head title="All Books" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-indigo-900 text-center py-4 lg:px-4">
                        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                            <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
                            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                        </div>
                    </div>
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
