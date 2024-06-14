import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentProcessingService {
  constructor() {}
  async ProcessPayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
