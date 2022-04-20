import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int 
  }
`;
//위에 hello에 타입 첫글자는 대문자로!!!!!!!!!!!

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 10,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers //shotshand property 자바스크립트에서 키값과 벨류값이 같으면 이렇게 쓸수가있다. 최신문법이다.
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});