import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HumanizationRequestModuleBase } from "./base/humanizationRequest.module.base";
import { HumanizationRequestService } from "./humanizationRequest.service";
import { HumanizationRequestController } from "./humanizationRequest.controller";
import { HumanizationRequestResolver } from "./humanizationRequest.resolver";

@Module({
  imports: [HumanizationRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [HumanizationRequestController],
  providers: [HumanizationRequestService, HumanizationRequestResolver],
  exports: [HumanizationRequestService],
})
export class HumanizationRequestModule {}
