import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'achievements'})
export class Achievement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'text'})
  description: string;

  @Column({type: 'varchar', length: 255, name: 'image_path'})
  imagePath: string;
}
