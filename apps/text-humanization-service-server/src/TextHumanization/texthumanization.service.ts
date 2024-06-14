import { Injectable } from "@nestjs/common";

@Injectable()
export class TextHumanizationService {
  constructor() {}
  async HumanizeText(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
