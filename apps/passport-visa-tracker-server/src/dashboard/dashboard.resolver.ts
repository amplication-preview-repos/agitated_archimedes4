import * as graphql from "@nestjs/graphql";
import { SubscriptionDetailsDto } from "./SubscriptionDetailsDto";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Mutation(() => SubscriptionDetailsDto)
  async UpdateSubscriptionDetails(
    @graphql.Args()
    args: SubscriptionDetailsDto
  ): Promise<SubscriptionDetailsDto> {
    return this.service.UpdateSubscriptionDetails(args);
  }

  @graphql.Query(() => SubscriptionDetailsDto)
  async ViewSubscriptionDetails(
    @graphql.Args("args")
    args: string
  ): Promise<SubscriptionDetailsDto> {
    return this.service.ViewSubscriptionDetails(args);
  }
}
