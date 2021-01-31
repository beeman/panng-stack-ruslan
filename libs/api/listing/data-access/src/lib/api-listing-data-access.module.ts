import { Module } from '@nestjs/common'
import { ApiListingDataAccessService } from './api-listing-data-access.service'
import { ApiCoreDataAccessModule } from '@panng/api/core/data-access'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiListingDataAccessService],
  exports: [ApiListingDataAccessService],
})
export class ApiListingDataAccessModule {}
