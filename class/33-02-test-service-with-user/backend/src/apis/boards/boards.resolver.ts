import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
@Resolver()
export class BoardResolver {
  constructor(
    private readonly boardService: BoardService,
    @Inject(CACHE_MANAGER)
    private readonly cachManeger: Cache,
  ) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    //πͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺμΊμμ λ±λ‘νκ³  μ‘°ννλ μ°μ΅ν΄λ³΄κΈ°πͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺ
    await this.cachManeger.set('aaa', createBoardInput, {
      ttl: 0,
    });

    const mycache = await this.cachManeger.get('aaa');
    console.log(mycache);
    return 'μ§κΈμ μλμλ!!! μΊμ νμ€νΈ μ€!!!!!';
    //πͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺμΊμμ λ±λ‘νκ³  μ‘°ννλ μ°μ΅ν΄λ³΄κΈ°πͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺπͺ
    // λ λμ€ μ°μ΅μ μν΄μ μ£Όμκ±ΈκΈ°!!!!!!!!!!!
    // console.log(writer);
    // console.log(title);
    // console.log(contents);
    // console.log(createBoardInput);
    //return this.boardService.create();
  }
}
