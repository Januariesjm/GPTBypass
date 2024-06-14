import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
