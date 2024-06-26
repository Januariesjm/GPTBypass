/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { HumanizationRequestService } from "../humanizationRequest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { HumanizationRequestCreateInput } from "./HumanizationRequestCreateInput";
import { HumanizationRequest } from "./HumanizationRequest";
import { HumanizationRequestFindManyArgs } from "./HumanizationRequestFindManyArgs";
import { HumanizationRequestWhereUniqueInput } from "./HumanizationRequestWhereUniqueInput";
import { HumanizationRequestUpdateInput } from "./HumanizationRequestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HumanizationRequestControllerBase {
  constructor(
    protected readonly service: HumanizationRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HumanizationRequest })
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createHumanizationRequest(
    @common.Body() data: HumanizationRequestCreateInput
  ): Promise<HumanizationRequest> {
    return await this.service.createHumanizationRequest({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        inputText: true,
        outputText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [HumanizationRequest] })
  @ApiNestedQuery(HumanizationRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async humanizationRequests(
    @common.Req() request: Request
  ): Promise<HumanizationRequest[]> {
    const args = plainToClass(HumanizationRequestFindManyArgs, request.query);
    return this.service.humanizationRequests({
      ...args,
      select: {
        createdAt: true,
        id: true,
        inputText: true,
        outputText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HumanizationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async humanizationRequest(
    @common.Param() params: HumanizationRequestWhereUniqueInput
  ): Promise<HumanizationRequest | null> {
    const result = await this.service.humanizationRequest({
      where: params,
      select: {
        createdAt: true,
        id: true,
        inputText: true,
        outputText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HumanizationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateHumanizationRequest(
    @common.Param() params: HumanizationRequestWhereUniqueInput,
    @common.Body() data: HumanizationRequestUpdateInput
  ): Promise<HumanizationRequest | null> {
    try {
      return await this.service.updateHumanizationRequest({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          inputText: true,
          outputText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HumanizationRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "HumanizationRequest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteHumanizationRequest(
    @common.Param() params: HumanizationRequestWhereUniqueInput
  ): Promise<HumanizationRequest | null> {
    try {
      return await this.service.deleteHumanizationRequest({
        where: params,
        select: {
          createdAt: true,
          id: true,
          inputText: true,
          outputText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
