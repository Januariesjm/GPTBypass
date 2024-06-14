import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HumanizationRequestUpdateInput = {
  inputText?: string | null;
  outputText?: string | null;
  user?: UserWhereUniqueInput | null;
};
