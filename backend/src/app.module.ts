import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ModulesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
