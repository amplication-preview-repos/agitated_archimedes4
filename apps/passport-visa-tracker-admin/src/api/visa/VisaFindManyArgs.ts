import { VisaWhereInput } from "./VisaWhereInput";
import { VisaOrderByInput } from "./VisaOrderByInput";

export type VisaFindManyArgs = {
  where?: VisaWhereInput;
  orderBy?: Array<VisaOrderByInput>;
  skip?: number;
  take?: number;
};
