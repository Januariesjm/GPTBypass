/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { HumanizationRequest } from "./HumanizationRequest";
import { HumanizationRequestCountArgs } from "./HumanizationRequestCountArgs";
import { HumanizationRequestFindManyArgs } from "./HumanizationRequestFindManyArgs";
import { HumanizationRequestFindUniqueArgs } from "./HumanizationRequestFindUniqueArgs";
import { CreateHumanizationRequestArgs } from "./CreateHumanizationRequestArgs";
import { UpdateHumanizationRequestArgs } from "./UpdateHumanizationRequestArgs";
import { DeleteHumanizationRequestArgs } from "./DeleteHumanizationRequestArgs";
import { User } from "../../user/base/User";
import { HumanizationRequestService } from "../humanizationRequest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HumanizationRequest)
export class HumanizationRequestResolverBase {
  constructor(
    protected readonly service: HumanizationRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "read",
    possession: "any",
  })
  async _humanizationRequestsMeta(
    @graphql.Args() args: HumanizationRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HumanizationRequest])
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "read",
    possession: "any",
  })
  async humanizationRequests(
    @graphql.Args() args: HumanizationRequestFindManyArgs
  ): Promise<HumanizationRequest[]> {
    return this.service.humanizationRequests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HumanizationRequest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "read",
    possession: "own",
  })
  async humanizationRequest(
    @graphql.Args() args: HumanizationRequestFindUniqueArgs
  ): Promise<HumanizationRequest | null> {
    const result = await this.service.humanizationRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HumanizationRequest)
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "create",
    possession: "any",
  })
  async createHumanizationRequest(
    @graphql.Args() args: CreateHumanizationRequestArgs
  ): Promise<HumanizationRequest> {
    return await this.service.createHumanizationRequest({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HumanizationRequest)
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "update",
    possession: "any",
  })
  async updateHumanizationRequest(
    @graphql.Args() args: UpdateHumanizationRequestArgs
  ): Promise<HumanizationRequest | null> {
    try {
      return await this.service.updateHumanizationRequest({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HumanizationRequest)
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "delete",
    possession: "any",
  })
  async deleteHumanizationRequest(
    @graphql.Args() args: DeleteHumanizationRequestArgs
  ): Promise<HumanizationRequest | null> {
    try {
      return await this.service.deleteHumanizationRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: HumanizationRequest
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}