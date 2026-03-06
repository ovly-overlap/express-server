import { Request, Response, NextFunction } from "express"

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(req.method, req.url)
  next()
}


// 로깅, 인증(세션, jwt검사), 바디파서, 권한