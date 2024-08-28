import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PassportServiceBase } from "./base/passport.service.base";

@Injectable()
export class PassportService extends PassportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
