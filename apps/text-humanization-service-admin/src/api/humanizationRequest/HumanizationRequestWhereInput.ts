import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HumanizationRequestWhereInput = {
  id?: StringFilter;
  inputText?: StringNullableFilter;
  outputText?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
