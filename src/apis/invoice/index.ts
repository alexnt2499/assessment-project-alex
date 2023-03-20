import ApiClientBase from "../ApiClientBase";
import { InvoiceBaseResponseType } from "../types/BaseType";
import {
  InvoiceCreateParamType,
  InvoiceGetParamType,
  InvoiceResponseType,
} from "../types/InvoiceType";
import qs from "qs";

class ApiInvoice extends ApiClientBase {
  constructor() {
    super();
  }

  /**
   * Create new invoice
   */
  public async createInvoice(
    access_token: string,
    org_token: string,
    params: InvoiceCreateParamType
  ): Promise<InvoiceBaseResponseType<any>> {
    const res = await this.instance.post(
      "/invoice-service/2.0.0/invoices",
      {
        invoices: [
          {
            bankAccount: {},
            customer: {},
            documents: [],
            customFields: [],
            extensions: [],
            currency: "",
            ...params,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "org-token": org_token,
          "Operation-Mode": "SYNC",
        },
      }
    );
    return res.data;
  }

  /**
   * Create list invoice
   */
  public async getListInvoices(
    access_token: string,
    org_token: string,
    params: InvoiceGetParamType
  ): Promise<InvoiceBaseResponseType<InvoiceResponseType>> {
    const res = await this.instance.get(
      `/invoice-service/1.0.0/invoices?${qs.stringify(params)}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "org-token": org_token,
          "Operation-Mode": "SYNC",
        },
      }
    );
    return res.data;
  }
}

export default ApiInvoice;
