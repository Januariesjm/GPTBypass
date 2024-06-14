import { User } from "../user/User";

export type HumanizationRequest = {
  createdAt: Date;
  id: string;
  inputText: string | null;
  outputText: string | null;
  updatedAt: Date;
  user?: User | null;
};
