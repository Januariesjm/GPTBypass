import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MembershipService } from "./membership.service";
import { MembershipControllerBase } from "./base/membership.controller.base";

@swagger.ApiTags("memberships")
@common.Controller("memberships")
export class MembershipController extends MembershipControllerBase {
  constructor(
    protected readonly service: MembershipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
