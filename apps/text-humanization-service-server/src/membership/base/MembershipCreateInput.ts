/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumMembershipTypeField } from "./EnumMembershipTypeField";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { UserCreateNestedManyWithoutMembershipsInput } from "./UserCreateNestedManyWithoutMembershipsInput";
import { Type } from "class-transformer";

@InputType()
class MembershipCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumMembershipTypeField,
  })
  @IsEnum(EnumMembershipTypeField)
  @IsOptional()
  @Field(() => EnumMembershipTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutMembershipsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutMembershipsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutMembershipsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutMembershipsInput;
}

export { MembershipCreateInput as MembershipCreateInput };
