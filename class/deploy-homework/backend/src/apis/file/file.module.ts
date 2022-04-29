import { Module } from '@nestjs/common';
import { FileResorver } from './file.resolver';
import { FileService } from './file.service';

@Module({
  providers: [FileResorver, FileService],
})
export class FileModule {}
