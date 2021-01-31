import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class ApiCoreDataAccessService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit {
  onModuleDestroy(): any {
    this.$disconnect()
  }

  onModuleInit(): any {
    this.$connect()
  }
}
