import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>
    return data.books.map(book => {
        return (
            <li key={book.id}> {book.name}</li>
        )
    })
}

export default BookList;