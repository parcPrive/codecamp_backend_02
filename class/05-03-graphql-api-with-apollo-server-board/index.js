import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
input CreateBoardInput{
  writer: String
  tittle: String
  contents: String
}

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }
  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
  }
`;
//위에 hello에 타입 첫글자는 대문자로!!!!!!!!!!!

// A map of functions which return data for the schema.
const resolvers = {     //여기가 핵심!!!!!!
  Query: {
    fetchBoards: () => {
      //데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        { number: 1, writer: "철수",title: "제목입니다.",  content: "내용입니다." },
        { number: 2, writer: "영희", title: "영희 제목입니다.",  content: "영희 내용입니다." },
        { number: 3, writer: "훈이", title: "훈이 제목입니다.",  content: "훈이 내용입니다." }
      ]
    

      //2. 꺼내온 결과 응답 주기
      return result
    },
  },
  Mutation:{
    createBoard: (_, args) => {
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args)
      
      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다!!"
    },
    
    createBoard2: (_, args) => {
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
      console.log(args)
      
      //2. 저장결과 알려주기!!
      return "등록에 성공하였습니다!!"
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers //shotshand property 자바스크립트에서 키값과 벨류값이 같으면 이렇게 쓸수가있다. 최신문법이다.
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});