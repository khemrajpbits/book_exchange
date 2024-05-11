import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Show = ({ book }) => {
    return (
        <AuthenticatedLayout>
            <div>
                <h1>{book.title}</h1>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Book Condition:</strong> {book.book_condition}</p>
                <p><strong>Availability Status:</strong> {book.availability_status}</p>
                <p>
                    <InertiaLink href={route('books.edit', { book: book.id })}>Edit</InertiaLink> | 
                    <InertiaLink href={route('books.index')}>Back to all books</InertiaLink>
                </p>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
