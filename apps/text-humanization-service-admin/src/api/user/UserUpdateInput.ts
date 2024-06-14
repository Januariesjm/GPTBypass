import { HumanizationRequestUpdateManyWithoutUsersInput } from "./HumanizationRequestUpdateManyWithoutUsersInput";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  humanizationRequests?: HumanizationRequestUpdateManyWithoutUsersInput;
  lastName?: string | null;
  membership?: MembershipWhereUniqueInput | null;
  password?: string;
  payments?: PaymentUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
