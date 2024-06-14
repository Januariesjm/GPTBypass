import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
