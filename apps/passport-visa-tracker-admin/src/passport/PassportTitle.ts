import { Passport as TPassport } from "../api/passport/Passport";

export const PASSPORT_TITLE_FIELD = "id";

export const PassportTitle = (record: TPassport): string => {
  return record.id?.toString() || String(record.id);
};
