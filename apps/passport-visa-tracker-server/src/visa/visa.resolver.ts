import * as graphql from "@nestjs/graphql";
import { VisaResolverBase } from "./base/visa.resolver.base";
import { Visa } from "./base/Visa";
import { VisaService } from "./visa.service";

@graphql.Resolver(() => Visa)
export class VisaResolver extends VisaResolverBase {
  constructor(protected readonly service: VisaService) {
    super(service);
  }
}
