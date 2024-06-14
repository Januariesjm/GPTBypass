import { Module } from "@nestjs/common";
import { TextHumanizationService } from "./texthumanization.service";
import { TextHumanizationController } from "./texthumanization.controller";
import { TextHumanizationResolver } from "./texthumanization.resolver";

@Module({
  controllers: [TextHumanizationController],
  providers: [TextHumanizationService, TextHumanizationResolver],
  exports: [TextHumanizationService],
})
export class TextHumanizationModule {}
