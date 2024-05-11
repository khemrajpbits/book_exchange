import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function index({ auth, books }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book List</h2>}
        >
             <Head title="All Books" />

               
                    <div
                        class="table-responsive"
                    >
                        <table
                            class="table table-striped table-hover table-borderless table-primary align-middle"
                        >
                            <thead class="table-light">
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>author</th>
                                    <th>book_condition</th>
                                    <th>availablity_status</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {books.map(book => (
                                    <tr
                                        class="table-primary"
                                    >
                                        <td scope="row">
                                            <li key={book.id}>
                                                <a href={route('books.edit', { book: book.id })}> {book.title}</a> 
                                            </li>
                                        </td>
                                        <td>{book.genre}</td>
                                        <td>{book.author}</td>
                                        <td>{book.book_condition}</td>
                                        <td>{book.availablity_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            <a href={route('books.create')}>Add New Book</a>
        </AuthenticatedLayout>
    );
}
