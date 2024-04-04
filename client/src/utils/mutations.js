// using apollo server
import { gql } from '@apollo/client';

// login user mutation
export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            profile {
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
export const REMOVE_BOOK =gql `
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            bookId
        }
    }

`;