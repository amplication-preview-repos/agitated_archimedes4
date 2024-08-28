import { PassportWhereInput } from "./PassportWhereInput";
import { PassportOrderByInput } from "./PassportOrderByInput";

export type PassportFindManyArgs = {
  where?: PassportWhereInput;
  orderBy?: Array<PassportOrderByInput>;
  skip?: number;
  take?: number;
};
