import { Module } from "@nestjs/common";
import { MembershipManagementService } from "./membershipmanagement.service";
import { MembershipManagementController } from "./membershipmanagement.controller";
import { MembershipManagementResolver } from "./membershipmanagement.resolver";

@Module({
  controllers: [MembershipManagementController],
  providers: [MembershipManagementService, MembershipManagementResolver],
  exports: [MembershipManagementService],
})
export class MembershipManagementModule {}
