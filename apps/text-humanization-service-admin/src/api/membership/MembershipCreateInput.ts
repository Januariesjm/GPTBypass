import { UserCreateNestedManyWithoutMembershipsInput } from "./UserCreateNestedManyWithoutMembershipsInput";

export type MembershipCreateInput = {
  typeField?: "Option1" | null;
  users?: UserCreateNestedManyWithoutMembershipsInput;
};
