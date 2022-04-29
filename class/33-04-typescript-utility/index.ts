interface IProfile {
  name: string;
  age: 13;
  school: string;
  hobby?: string;
}

// interface IProfile {
//   apple: string;
// }
//선언병합
// const bbb: IProfile ={

// }

// 1. Partial 타입
type Mytype1 = Partial<IProfile>; //Mytype1에 마우스 대면 ?가있다 필수요소가 아니다.

// 2. Required 타입
type Mytype2 = Required<IProfile>; //Mytype2에 마수스 다면 ?가없는 필수요소이다.

// 3. Pick 타입
type Mytype3 = Pick<IProfile, "name" | "age">; //Pick을 써서 쓰고 싶은거를 고를 수 있다.

// 4. Omit 타입
type Mytype4 = Omit<IProfile, "school">; //Omit은 빼고 싶은거를 선언하는거다 Mytype4에 마우스 올려서 확인해보면 알수있다.

// 5. Record 타입
type ZZZ = "aaa" | "qqq" | "rrr";
type Mytype6 = Record<ZZZ, IProfile>; //Mytype6에 마우스 대보면 알수있다.
