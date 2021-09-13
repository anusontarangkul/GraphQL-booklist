import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';


function BookList() {

    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>
    return data.books.map(book => {
        return (
            <li key={book.id}> {book.name}</li>
        )
    })
}

export default BookList;