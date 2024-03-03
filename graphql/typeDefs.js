export const typeDefs = `#graphql
  type Book {
    id: ID!,
    name: String,
    email: String,
    age:Int,
    
  }
  
  type developers{
    id: ID!,
    name: String,
    email: String,
    age:Int,
  }
  type Query {
    books: [Book]
    developers: [developers]
  }

 
`;
