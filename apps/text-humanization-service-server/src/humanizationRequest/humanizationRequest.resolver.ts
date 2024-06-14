import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HumanizationRequestResolverBase } from "./base/humanizationRequest.resolver.base";
import { HumanizationRequest } from "./base/HumanizationRequest";
import { HumanizationRequestService } from "./humanizationRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HumanizationRequest)
export class HumanizationRequestResolver extends HumanizationRequestResolverBase {
  constructor(
    protected readonly service: HumanizationRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
