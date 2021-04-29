import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateMovieDto extends PartialType(CreateMovieDto) {}
