import { IsInt, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @IsInt()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  name: string;
}
