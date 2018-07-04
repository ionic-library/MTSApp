import { Injectable } from "@angular/core";
import { transports, format, createLogger, Logger } from "winston";

@Injectable()
export class LogProvider {
  public getLogger = (): Logger => {
    const logger = createLogger({
      level: "info"
    });

    if (process.env.NODE_ENV !== "production") {
      logger.add(
        new transports.Console({
          format: format.simple()
        })
      );
    }

    return logger;
  };
}
