import express, {Response, Request} from "express";
import userService from "../service/userService.service.ts";

// const userService = 

export const getUsers = (req:Request, res:Response) =>{
    const users = userService.getUsers();
    res.json(users);
};

export const createUser = async (req:Request, res:Response) => {
  const user = await userService.createUser(req.body)
  res.json(user)
}

