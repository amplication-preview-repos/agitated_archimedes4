import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisaService } from "./visa.service";
import { VisaControllerBase } from "./base/visa.controller.base";

@swagger.ApiTags("visas")
@common.Controller("visas")
export class VisaController extends VisaControllerBase {
  constructor(protected readonly service: VisaService) {
    super(service);
  }
}
