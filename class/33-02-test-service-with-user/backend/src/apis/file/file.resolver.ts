import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { FileService } from './file.service';

@Resolver()
export class FileResorver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => [String])
  uploadFile(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
  ) {
    console.log(files);
    return this.fileService.upload({ files });
  }
}
