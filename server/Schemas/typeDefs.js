const typeDefs = `

    type Book {
        _id: ID
        authors: [String!]
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int!
        saveBooks: [Book]
    }

    input SavedBooks {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        image: String!
        link: String!
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBooks): User
        deleteBook(bookId: String!): User
    }
`;

// export typeDefs
module.exports = typeDefs;