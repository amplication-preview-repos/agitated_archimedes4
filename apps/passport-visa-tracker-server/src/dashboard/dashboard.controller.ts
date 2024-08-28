import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DashboardService } from "./dashboard.service";
import { SubscriptionDetailsDto } from "./SubscriptionDetailsDto";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardController {
  constructor(protected readonly service: DashboardService) {}

  @common.Put("/subscription-details")
  @swagger.ApiOkResponse({
    type: SubscriptionDetailsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSubscriptionDetails(
    @common.Body()
    body: string
  ): Promise<SubscriptionDetailsDto> {
        return this.service.UpdateSubscriptionDetails(body);
      }

  @common.Get("/subscription-details")
  @swagger.ApiOkResponse({
    type: SubscriptionDetailsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewSubscriptionDetails(
    @common.Body()
    body: string
  ): Promise<SubscriptionDetailsDto> {
        return this.service.ViewSubscriptionDetails(body);
      }
}
