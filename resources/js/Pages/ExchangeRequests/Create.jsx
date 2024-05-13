import { useState, useHistory } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';


export default function create({ auth, errors, flash }) {
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
        // router.post(route('exchange_requests.store'), formData);
        try {
            const response =  fetch('/api/exchange_requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to create Exchange Request');
            }else{
                history.push('/exchange_requests');
            }
            // Redirect or handle success
        } catch (error) {
            console.error('Error creating Exchange Request:', error);
            // Handle error
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Exchange Request Create</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
                                    Title
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="title" value={formData.title} onChange={handleChange} placeholder="Title" type="text" />
                                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="author">
                                    author
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="author" type="text" name='author' value={formData.author} onChange={handleChange} placeholder="Author" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="genre">
                                    Genre
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="genre" type="text" placeholder="Enter Genre" name="genre" value={formData.genre} onChange={handleChange} />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="book_condition">
                                    Book Condition
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="book_condition" type="text" name="book_condition" value={formData.book_condition} onChange={handleChange} placeholder="Book Condition" />
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="availability_status">
                                    Availability Status
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="availability_status" name="availability_status" value={formData.availability_status} onChange={handleChange}>
                                        <option value="">Select Availablity</option>
                                        <option value="Available">Available</option>
                                        <option value="Borrowed">Borrowed</option>
                                        <option value="Exchanged">Exchanged</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
                                    save
                                </button>
                            </div>
                            {/* <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <a href={route('books.index')}>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
                                        Cancel
                                    </button>
                                </a>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
