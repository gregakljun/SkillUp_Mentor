import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithUser } from 'interfaces/auth.interface';

export const GetCurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest<RequestWithUser>();
        return request.user;
    },
);