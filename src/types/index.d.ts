// import { AuthUser } from './auth.types.js';
import { JwtPayload } from "jsonwebtoken";
import * as express from "express"; // 추후 삭제

// declare global {
//   namespace Express {
//     interface Request {
//       user?: AuthUser
//     }
//   }
// }

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
      email: string
      password: string
    }
  }
}

export {}