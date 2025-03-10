import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from 'config/schema.config';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from 'middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { PermissionGaurd } from './permissions/guards/permission.guard';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [`.env.${process.env.STAGE}`],
    validationSchema: configValidationSchema,
  }),
  DatabaseModule,
  UsersModule,
  AuthModule,
  RolesModule,
  PermissionsModule,
  ProductsModule
],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGaurd,
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({path: '*', method: RequestMethod.ALL})
  }
}
