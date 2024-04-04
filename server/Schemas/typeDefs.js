const typeDefs = `
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        saveBooks: [Book]
    }

    input SavedBooks {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBooks): User
        removeBook(bookId): User
    }
`;

// export typeDefs
module.exports = typeDefs;