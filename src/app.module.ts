import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlueController } from './blue/blue.controller';

@Module({
  imports: [],
  controllers: [AppController, BlueController],
  providers: [AppService],
})
export class AppModule {}
