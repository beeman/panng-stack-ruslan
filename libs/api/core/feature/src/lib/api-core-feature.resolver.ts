import { Resolver, Query } from '@nestjs/graphql'

@Resolver()
export class ApiCoreFeatureResolver {
  @Query(() => String, { nullable: true })
  hello() {
    return 'Hello World!'
  }
}
