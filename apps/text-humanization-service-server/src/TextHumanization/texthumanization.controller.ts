import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TextHumanizationService } from "./texthumanization.service";

@swagger.ApiTags("textHumanizations")
@common.Controller("textHumanizations")
export class TextHumanizationController {
  constructor(protected readonly service: TextHumanizationService) {}

  @common.Post("/humanize")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HumanizeText(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HumanizeText(body);
      }
}
