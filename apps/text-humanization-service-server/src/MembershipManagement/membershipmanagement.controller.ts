import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MembershipManagementService } from "./membershipmanagement.service";

@swagger.ApiTags("membershipManagements")
@common.Controller("membershipManagements")
export class MembershipManagementController {
  constructor(protected readonly service: MembershipManagementService) {}

  @common.Get("/:id/check-membership")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckMembership(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CheckMembership(body);
      }
}
