import { User } from "../user/User";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
