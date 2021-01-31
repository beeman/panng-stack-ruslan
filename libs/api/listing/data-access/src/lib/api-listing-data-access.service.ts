import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@panng/api/core/data-access'

@Injectable()
export class ApiListingDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  listings() {
    return this.data.listing.findMany()
  }
}
