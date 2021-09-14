import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';


function BookList() {
    const [selectedBook, setSelectedBook] = useState("");

    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>
    return (
        <div>
            <ul id="book-list">
                {data.books.map(book => {
                    return (
                        <li key={book.id} onClick={(e) => setSelectedBook(book.id)}> {book.name}</li>
                    )
                })}
            </ul>
            < BookDetails bookId={selectedBook} />
        </div>

        // 
    )

}

export default BookList;