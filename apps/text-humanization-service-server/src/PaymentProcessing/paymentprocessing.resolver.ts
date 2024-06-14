import * as graphql from "@nestjs/graphql";
import { PaymentProcessingService } from "./paymentprocessing.service";

export class PaymentProcessingResolver {
  constructor(protected readonly service: PaymentProcessingService) {}

  @graphql.Query(() => String)
  async ProcessPayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessPayment(args);
  }
}
