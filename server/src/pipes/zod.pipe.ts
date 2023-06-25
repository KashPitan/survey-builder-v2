import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { Schema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  transform(value: any) {
    const validation = this.schema.safeParse(value);
    if (!validation.success) throw new BadRequestException();
    return value;
  }
}
