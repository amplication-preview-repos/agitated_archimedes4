import { Module } from "@nestjs/common";
import { PassportModuleBase } from "./base/passport.module.base";
import { PassportService } from "./passport.service";
import { PassportController } from "./passport.controller";
import { PassportResolver } from "./passport.resolver";

@Module({
  imports: [PassportModuleBase],
  controllers: [PassportController],
  providers: [PassportService, PassportResolver],
  exports: [PassportService],
})
export class PassportModule {}
