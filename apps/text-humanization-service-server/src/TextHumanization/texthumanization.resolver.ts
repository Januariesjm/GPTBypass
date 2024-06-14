import * as graphql from "@nestjs/graphql";
import { TextHumanizationService } from "./texthumanization.service";

export class TextHumanizationResolver {
  constructor(protected readonly service: TextHumanizationService) {}

  @graphql.Mutation(() => String)
  async HumanizeText(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HumanizeText(args);
  }
}
