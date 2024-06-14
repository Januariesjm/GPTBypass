import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HumanizationRequestCreateInput = {
  inputText?: string | null;
  outputText?: string | null;
  user?: UserWhereUniqueInput | null;
};
