import { Module } from '@nestjs/common'
import { ExampleController } from '../controllers'
import { ExampleService } from '../services'

@Module({
	controllers: [ExampleController],
	providers: [ExampleService],
})
export class AppModule {}
