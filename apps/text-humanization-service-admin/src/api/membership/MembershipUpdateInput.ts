import { UserUpdateManyWithoutMembershipsInput } from "./UserUpdateManyWithoutMembershipsInput";

export type MembershipUpdateInput = {
  typeField?: "Option1" | null;
  users?: UserUpdateManyWithoutMembershipsInput;
};
