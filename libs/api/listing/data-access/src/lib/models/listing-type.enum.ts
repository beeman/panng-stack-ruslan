import { registerEnumType } from '@nestjs/graphql'
import { ListingType } from '@prisma/client'

export { ListingType }

registerEnumType(ListingType, { name: 'ListingType' })
