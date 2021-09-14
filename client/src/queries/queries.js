import { gql } from '@apollo/client';

const GET_AUTHORS = gql`
    {
        authors{
            name
            id
        }
    }
`

const GET_BOOKS = gql`
    {
        books{
            name
            id
        }
    }
`

const GET_BOOK = gql`
    query($id: ID ){
        book(id: $id){
            id
            name
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`

const ADD_BOOK_MUTATION = gql`
    mutation 
        addBook($name: String!, $genre: String!, $authorId: String!){
            addBook(name: $name, genre: $genre, authorId: $authorId){
                name
                id
            }
        }
    
`


export { GET_AUTHORS, GET_BOOKS, ADD_BOOK_MUTATION, GET_BOOK }