import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestFeatureModule } from "./test-feature/test-feature.module";

@Module({
  imports: [
    TestFeatureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
