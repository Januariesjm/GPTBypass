import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HumanizationRequestServiceBase } from "./base/humanizationRequest.service.base";

@Injectable()
export class HumanizationRequestService extends HumanizationRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
