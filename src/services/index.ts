import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getData(): string {
    return 'This is some example data';
  }
}
