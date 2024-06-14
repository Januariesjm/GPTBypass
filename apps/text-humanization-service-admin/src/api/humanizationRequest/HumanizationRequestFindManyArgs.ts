import { HumanizationRequestWhereInput } from "./HumanizationRequestWhereInput";
import { HumanizationRequestOrderByInput } from "./HumanizationRequestOrderByInput";

export type HumanizationRequestFindManyArgs = {
  where?: HumanizationRequestWhereInput;
  orderBy?: Array<HumanizationRequestOrderByInput>;
  skip?: number;
  take?: number;
};
