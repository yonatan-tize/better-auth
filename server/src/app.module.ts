import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './utils/auth'; // Your Better Auth instance
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule.forRoot({ auth }), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
