import { JwtPayload as payload } from 'jsonwebtoken';

export interface JwtPayload extends payload {
  user: {
    id: string;
    email: string;
    role: 'ADMIN' | 'HIRING' | 'OPEN_TO_WORK'; // TODO: rename them, also use prisma enum here
  };
}
