import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../queries/queries';


// BookList parent
function BookDetails({ bookId }) {

    const [book, setBook] = useState(null);

    const result = useQuery(GET_BOOK, {
        variables: { id: bookId }
    })

    useEffect(() => {
        if (result.data) {
            setBook(result.data.book)
        }
    }, [result.data]);

    if (result.loading) {
        return <div>Loading..</div>
    }

    if (!book) {
        return (
            <div>
                Click in the book for a description!
            </div>
        )
    }

    return (
        <div id="book-details">
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author</p>
            <ul className="other-books">
                {book.author.books.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default BookDetails;