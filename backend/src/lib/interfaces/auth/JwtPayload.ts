import { JwtPayload as payload } from 'jsonwebtoken';

export interface JwtPayload extends payload {
  user: {
    id: string;
    email: string;
    role: 'admin' | 'companyuser' | 'workinguser'; // TODO: rename them, also use prisma enum here
  };
}
