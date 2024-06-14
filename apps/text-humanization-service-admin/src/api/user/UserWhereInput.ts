import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HumanizationRequestListRelationFilter } from "../humanizationRequest/HumanizationRequestListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  humanizationRequests?: HumanizationRequestListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  membership?: MembershipWhereUniqueInput;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
