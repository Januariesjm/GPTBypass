import * as graphql from "@nestjs/graphql";
import { MembershipManagementService } from "./membershipmanagement.service";

export class MembershipManagementResolver {
  constructor(protected readonly service: MembershipManagementService) {}

  @graphql.Query(() => String)
  async CheckMembership(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CheckMembership(args);
  }
}
