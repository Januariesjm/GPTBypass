import { Injectable } from "@nestjs/common";

@Injectable()
export class MembershipManagementService {
  constructor() {}
  async CheckMembership(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
