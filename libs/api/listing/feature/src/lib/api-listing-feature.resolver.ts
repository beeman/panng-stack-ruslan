import { Query, Resolver } from '@nestjs/graphql'
import {
  ApiListingDataAccessService,
  Listing,
} from '@panng/api/listing/data-access'

@Resolver()
export class ApiListingFeatureResolver {
  constructor(private readonly service: ApiListingDataAccessService) {}

  @Query(() => [Listing], { nullable: true })
  listings() {
    return this.service.listings()
  }
}
