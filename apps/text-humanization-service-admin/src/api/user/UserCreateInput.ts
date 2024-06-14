import { HumanizationRequestCreateNestedManyWithoutUsersInput } from "./HumanizationRequestCreateNestedManyWithoutUsersInput";
import { MembershipWhereUniqueInput } from "../membership/MembershipWhereUniqueInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  humanizationRequests?: HumanizationRequestCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  membership?: MembershipWhereUniqueInput | null;
  password: string;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
