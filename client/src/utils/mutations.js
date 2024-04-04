// using apollo server
import { gql } from '@apollo/client';

// login user mutation
export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// add user mutation
export const ADD_USER = gql `
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// save book mutation
export const SAVE_BOOK = gql `
    mutation saveBook($book: SavedBook!) {
        saveBook(book: $book) {
            _id
            username
            books
        }
    }
`;

// remove book mutation
export const REMOVE_BOOK = gql `
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            _id
            username
            bookId
        }
    }

`;