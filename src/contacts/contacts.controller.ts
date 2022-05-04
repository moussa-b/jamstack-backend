import { ContactService } from '../contact/contact.service';
import { Controller, Get } from '@nestjs/common';
import { Contact } from '../entities/contact.entity';

@Controller('api/contacts')
export class ContactsController {
  constructor(private contactService: ContactService) {}

  @Get()
  read(): Promise<Contact[]> {
    return this.contactService.readAll();
  }
}
