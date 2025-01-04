import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './modules/app.module'
import { ValidationPipe } from '@nestjs/common'
import cookieParser from 'cookie-parser'

import express from 'express'
import Logging from 'library/Logging'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  //Setup to display files
  app.use('/files', express.static('files'))

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS Tutorial API')
    .setDescription('This is API for NestJS tutorial')
    .setVersion('1.0.0')
    .addTag('nestjs')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  const PORT = process.env.PORT || 8080
  await app.listen(PORT)

  Logging.error(`App is listening on: ${await app.getUrl()}`)
}
bootstrap()
