import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentProcessingService } from "./paymentprocessing.service";

@swagger.ApiTags("paymentProcessings")
@common.Controller("paymentProcessings")
export class PaymentProcessingController {
  constructor(protected readonly service: PaymentProcessingService) {}

  @common.Get("/:id/process-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessPayment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessPayment(body);
      }
}
