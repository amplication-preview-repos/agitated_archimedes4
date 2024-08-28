import { Module } from "@nestjs/common";
import { VisaModuleBase } from "./base/visa.module.base";
import { VisaService } from "./visa.service";
import { VisaController } from "./visa.controller";
import { VisaResolver } from "./visa.resolver";

@Module({
  imports: [VisaModuleBase],
  controllers: [VisaController],
  providers: [VisaService, VisaResolver],
  exports: [VisaService],
})
export class VisaModule {}
