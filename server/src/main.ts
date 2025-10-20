import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  const port = process.env.PORT || 4001;
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
