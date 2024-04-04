const typeDefs = `
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Book {

    }

    type User {

    }

    type Mutation {
        
    }
`

// export typeDefs
module.exports = typeDefs;