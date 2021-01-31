import { Module } from '@nestjs/common'
import { ApiListingFeatureResolver } from './api-listing-feature.resolver'
import { ApiListingDataAccessModule } from '@panng/api/listing/data-access'

@Module({
  imports: [ApiListingDataAccessModule],
  providers: [ApiListingFeatureResolver],
})
export class ApiListingFeatureModule {}
