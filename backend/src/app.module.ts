import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StoreModule } from './store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RatingModule } from './rating/rating.module';
import { PrivilegesModule } from './privileges/privileges.module';
import { join } from 'path';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: +process.env.MYSQL_LOCAL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsersModule, StoreModule, RatingModule, PrivilegesModule, AchievementsModule
  ]
})
export class AppModule {}
