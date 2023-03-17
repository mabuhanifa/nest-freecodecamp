import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasource: {
        db: {
          url: 'postgresql://postgres:15204008@localhost:5434/nest?schema=public',
        },
      },
    });
  }
}
