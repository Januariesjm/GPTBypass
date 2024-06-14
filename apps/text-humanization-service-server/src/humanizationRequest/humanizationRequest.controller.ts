import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HumanizationRequestService } from "./humanizationRequest.service";
import { HumanizationRequestControllerBase } from "./base/humanizationRequest.controller.base";

@swagger.ApiTags("humanizationRequests")
@common.Controller("humanizationRequests")
export class HumanizationRequestController extends HumanizationRequestControllerBase {
  constructor(
    protected readonly service: HumanizationRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
