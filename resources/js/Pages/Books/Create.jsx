import { useState, createContext, useContext, Fragment } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {router } from '@inertiajs/react';


export default function create({auth}) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        book_condition: '',
        availability_status: '',
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
        router.post(route('books.store'), formData);
    };

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Book Create</h2>}
    >
            <div>
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
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};
