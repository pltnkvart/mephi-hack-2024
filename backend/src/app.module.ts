import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StoreModule } from './store/store.module';
import { RatingModule } from './rating/rating.module';
import { PrivilegesModule } from './privileges/privileges.module';

@Module({
  imports: [UsersModule, StoreModule, RatingModule, PrivilegesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
