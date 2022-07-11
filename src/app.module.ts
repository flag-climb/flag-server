import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CragsModule } from './crags/crags.module';

@Module({
  imports: [CragsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
