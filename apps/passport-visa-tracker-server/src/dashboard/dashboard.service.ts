import { Injectable } from "@nestjs/common";
import { SubscriptionDetailsDto } from "./SubscriptionDetailsDto";

@Injectable()
export class DashboardService {
  constructor() {}
  async UpdateSubscriptionDetails(args: SubscriptionDetailsDto): Promise<SubscriptionDetailsDto> {
    throw new Error("Not implemented");
  }
  async ViewSubscriptionDetails(args: string): Promise<SubscriptionDetailsDto> {
    throw new Error("Not implemented");
  }
}
