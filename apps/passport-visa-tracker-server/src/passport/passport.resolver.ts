import * as graphql from "@nestjs/graphql";
import { PassportResolverBase } from "./base/passport.resolver.base";
import { Passport } from "./base/Passport";
import { PassportService } from "./passport.service";

@graphql.Resolver(() => Passport)
export class PassportResolver extends PassportResolverBase {
  constructor(protected readonly service: PassportService) {
    super(service);
  }
}
