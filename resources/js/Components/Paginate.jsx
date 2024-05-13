import React from 'react';
import { Link } from '@inertiajs/react';


const Pagination = ({ model, currentPage, setCurrentPage }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                {model.prev_page_url && (
                    <li>
                        <Link
                            href={model.prev_page_url}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Previous</Link>
                    </li>
                )}
                {model.links.map(link => (
                    <li key={link.url}>
                        <Link
                            href={link.url}
                            onClick={() => setCurrentPage(link.label)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : ''}`}
                        >{link.label}</Link>
                    </li>
                ))}
                {model.next_page_url && (
                    <li>
                        <Link
                            href={model.next_page_url}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Next</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
