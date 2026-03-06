import express, { Request, Response } from "express"

const app = express()

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("server running")
})

//
// 로직 설명 : router > controller > service > repository > db 
// router=경로 매핑 담당
// service=데이터가공, 검증, 
