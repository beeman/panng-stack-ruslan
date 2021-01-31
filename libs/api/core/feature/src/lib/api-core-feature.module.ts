import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
    }),
  ],
  providers: [ApiCoreFeatureResolver],
  exports: [],
})
export class ApiCoreFeatureModule {}
