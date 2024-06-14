/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Membership as PrismaMembership,
  User as PrismaUser,
} from "@prisma/client";

export class MembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MembershipCountArgs, "select">
  ): Promise<number> {
    return this.prisma.membership.count(args);
  }

  async memberships<T extends Prisma.MembershipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipFindManyArgs>
  ): Promise<PrismaMembership[]> {
    return this.prisma.membership.findMany<Prisma.MembershipFindManyArgs>(args);
  }
  async membership<T extends Prisma.MembershipFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipFindUniqueArgs>
  ): Promise<PrismaMembership | null> {
    return this.prisma.membership.findUnique(args);
  }
  async createMembership<T extends Prisma.MembershipCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipCreateArgs>
  ): Promise<PrismaMembership> {
    return this.prisma.membership.create<T>(args);
  }
  async updateMembership<T extends Prisma.MembershipUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipUpdateArgs>
  ): Promise<PrismaMembership> {
    return this.prisma.membership.update<T>(args);
  }
  async deleteMembership<T extends Prisma.MembershipDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MembershipDeleteArgs>
  ): Promise<PrismaMembership> {
    return this.prisma.membership.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.membership
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
