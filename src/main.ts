import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(MyLoggerService));
  app.enableCors();

  // 讓所有路由網址前面都加上/api
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
