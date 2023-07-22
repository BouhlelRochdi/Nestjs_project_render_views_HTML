import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set up views directory and engine (assuming you're using EJS)
  app.enableCors();
  // app.setGlobalPrefix('api');
  app.setBaseViewsDir(join(__dirname, "..", "./src/views"));
  app.setViewEngine("ejs"); // You can use any other templating engine you prefer
  app.useStaticAssets(join(__dirname, '..', './src/public'));

  const apiPort = '3331';
  await app.listen(apiPort, () => {
    console.log('Listening at http://localhost:', apiPort);
  });

  // await app.listen(3000);
}
bootstrap();
