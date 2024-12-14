import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PassportService } from "./passport.service";
import { PassportControllerBase } from "./base/passport.controller.base";

@swagger.ApiTags("passports")
@common.Controller("passports")
export class PassportController extends PassportControllerBase {
  constructor(protected readonly service: PassportService) {
    super(service);
  }
}
