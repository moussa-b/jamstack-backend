import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/contact.entity';

@Injectable()
export class ContactService {
  async readAll(): Promise<Contact[]> {
    return [
      {
        id: 1,
        name: 'CL 001',
        title: 'Developer',
        email: 'cl001@yopmail.com',
        phone: '0782888624',
        address: '1445 Midway Road',
        city: 'Rogers',
      },
      {
        id: 5,
        name: 'CL 002',
        title: 'Manager',
        email: 'cl002@yopmail.com',
        phone: '0782880000',
        address: '123 Rue du lac',
        city: 'Paris',
      },
    ];
  }
}
