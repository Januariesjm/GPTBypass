import { HumanizationRequest } from "../humanizationRequest/HumanizationRequest";
import { Membership } from "../membership/Membership";
import { Payment } from "../payment/Payment";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  humanizationRequests?: Array<HumanizationRequest>;
  id: string;
  lastName: string | null;
  membership?: Membership | null;
  payments?: Array<Payment>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
