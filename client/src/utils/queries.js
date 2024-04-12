// using Apollo server
import { gql } from '@apollo/client';

// executing the 'me' query set
// remember 'me' returns User type
export const GET_ME = gql`
     {
        me{
            _id
            username
            email
            bookCount
            saveBooks {
                bookId
                authors
                description
                title
                link
            }
        }
    }
`;