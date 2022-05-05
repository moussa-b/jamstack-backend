import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact/contact.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL || 'postgres://nestuser:nestpassword@localhost/nestngdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ...(process.env.DATABASE_URL ? { ssl: { rejectUnauthorized: false } } : {}),
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],
})
export class AppModule {}
