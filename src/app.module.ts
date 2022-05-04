import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactService } from './contact/contact.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],
})
export class AppModule {}
