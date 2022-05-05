import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Contact {
  @ApiProperty({ description: 'Unique id of the contact', type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of the contact', type: String })
  @Column()
  name: string;

  @ApiProperty({ description: 'Title of the contact', type: String })
  @Column()
  title: string;

  @ApiProperty({ description: 'Email of the contact', type: String })
  @Column()
  email: string;

  @ApiProperty({ description: 'Phone of the contact', type: String })
  @Column()
  phone: string;

  @ApiProperty({ description: 'Address of the contact', type: String })
  @Column()
  address: string;

  @ApiProperty({ description: 'City of the contact', type: String })
  @Column()
  city: string;
}
