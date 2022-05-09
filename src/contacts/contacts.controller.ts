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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';

@ApiTags('contacts')
@Controller('api/contacts')
export class ContactsController {
  constructor(private contactService: ContactService) {}

  @Get()
  @ApiOperation({ summary: 'Return list of all contacts' })
  @ApiResponse({ status: 200, type: Contact, isArray: true })
  read(): Promise<Contact[]> {
    return this.contactService.readAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a contact' })
  @ApiBody({ description: 'Contact object in json format', type: Contact })
  @ApiResponse({ status: 201, type: Contact })
  async create(@Body() contact: Contact): Promise<Contact> {
    return this.contactService.create(contact);
  }

  @Put(':id/update')
  @ApiOperation({ summary: 'Update a contact' })
  @ApiBody({ description: 'Contact object in json format', type: Contact })
  @ApiParam({ name: 'id', description: 'Unique id of the contact to update', type: Number })
  @ApiResponse({ status: 200, type: UpdateResult }) // TODO improve this UpdateResult and DeleteResult not taken into account
  async update(@Param('id') id, @Body() contact: Contact): Promise<UpdateResult> {
    contact.id = Number(id);
    return this.contactService.update(contact);
  }

  @Delete(':id/delete')
  @ApiOperation({ summary: 'Delete a contact' })
  @ApiParam({ name: 'id', description: 'Unique id of the contact to delete', type: Number })
  @ApiResponse({ status: 200, type: DeleteResult })
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.contactService.delete(id);
  }
}
