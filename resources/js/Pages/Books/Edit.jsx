// resources/js/Pages/Books/Edit.js
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { useState} from 'react';


const Edit = ({ book, auth }) => {
    const [formData, setFormData] = useState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        book_condition: book.book_condition,
        availability_status: book.availability_status,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        router.put(route('books.update', { book: book.id }), formData);
    };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book Edit</h2>}
    >
            <div>
                <h1>Edit Book</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" required name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                    <input type="text" required name="author" value={formData.author} onChange={handleChange} placeholder="Author" />
                    <input type="text" required name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" />
                    <input type="text" required name="book_condition" value={formData.book_condition} onChange={handleChange} placeholder="Book Condition" />
                    <select name="availability_status" required value={formData.availability_status} onChange={handleChange}>
                        <option value="">Select Availablity</option>
                        <option value="Available">Available</option>
                        <option value="Borrowed">Borrowed</option>
                        <option value="Exchanged">Exchanged</option>
                    </select>
                    <button type="submit">Update Book</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
