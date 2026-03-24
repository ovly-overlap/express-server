import { Request, Response } from 'express';

interface LoginReqDTO extends Request {
  body: {
    id: string;
    password: string;
  };
  user?: any; 
}

interface LoginResDTO extends Response {
  // 응답 관련 커스텀 타입이 필요할 때 정의
}

export {LoginReqDTO, LoginResDTO}
