import { HumanizationRequest as THumanizationRequest } from "../api/humanizationRequest/HumanizationRequest";

export const HUMANIZATIONREQUEST_TITLE_FIELD = "id";

export const HumanizationRequestTitle = (
  record: THumanizationRequest
): string => {
  return record.id?.toString() || String(record.id);
};
