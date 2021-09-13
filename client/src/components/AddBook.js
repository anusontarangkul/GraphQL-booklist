import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK_MUTATION, GET_BOOKS } from '../queries/queries';
import { useState } from 'react';

function AddBook() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const [addBookMutation, { dataMutation }] = useMutation(ADD_BOOK_MUTATION);

    const { loading, error, data } = useQuery(GET_AUTHORS);

    if (error) return `Error: ${error.message}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId,
            },
            refetchQueries: [{ query: GET_BOOKS }]
        });
    };

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Name: </label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field">
                <label>Genre: </label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className="field">
                <label>Author: </label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select Author</option>
                    {loading ? (
                        <option disabled>Loading...</option>
                    ) : (
                            data.authors.map((author) => (
                                <option
                                    key={author.id}
                                    value={author.id}
                                    onChange={(e) => setAuthorId(e.target.value)}
                                >
                                    {author.name}
                                </option>
                            ))
                        )}
                </select>
            </div>

            <button>+</button>
        </form>
    );
}

export default AddBook;