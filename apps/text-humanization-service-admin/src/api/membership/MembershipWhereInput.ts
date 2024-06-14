import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type MembershipWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  users?: UserListRelationFilter;
};
