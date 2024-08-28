import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisaServiceBase } from "./base/visa.service.base";

@Injectable()
export class VisaService extends VisaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
