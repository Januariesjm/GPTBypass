import { User } from "../user/User";

export type Membership = {
  createdAt: Date;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  users?: Array<User>;
};
