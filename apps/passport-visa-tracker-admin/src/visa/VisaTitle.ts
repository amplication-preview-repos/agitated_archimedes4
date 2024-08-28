import { Visa as TVisa } from "../api/visa/Visa";

export const VISA_TITLE_FIELD = "id";

export const VisaTitle = (record: TVisa): string => {
  return record.id?.toString() || String(record.id);
};
