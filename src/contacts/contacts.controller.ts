import { ContactService } from '../contact/contact.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Contact } from '../entities/contact.entity';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('contacts')
@Controller('api/contacts')
export class ContactsController {
  constructor(private contactService: ContactService) {}

  @Get()
  @ApiOperation({ summary: 'Return list of all contacts' })
  read(): Promise<Contact[]> {
    return this.contactService.readAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a contact' })
  @ApiBody({ description: 'Contact object in json format' })
  async create(@Body() contact: Contact): Promise<any> {
    return this.contactService.create(contact);
  }

  @Put(':id/update')
  @ApiOperation({ summary: 'Update a contact' })
  @ApiBody({ description: 'Contact object in json format' })
  @ApiParam({ name: 'id', description: 'Unique id of the contact to update', type: Number })
  async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
    contact.id = Number(id);
    return this.contactService.update(contact);
  }

  @Delete(':id/delete')
  @ApiOperation({ summary: 'Delete a contact' })
  @ApiParam({ name: 'id', description: 'Unique id of the contact to delete', type: Number })
  async delete(@Param('id') id): Promise<any> {
    return this.contactService.delete(id);
  }
}
