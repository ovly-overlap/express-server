import { Request } from "express";

export class SignupRequestDTO{
    email: string;
    password: string;
    name: string;

    static of(body: any): SignupRequestDTO {
        const dto = new SignupRequestDTO();
        dto.email = body.email;
        dto.password = body.password;
        dto.name = body.name;

        // SignupRequestDTO.validation(dto);
        return dto;
    }
}

export interface SignupRequestDTO extends Request{
    body: {
        email: string;
        password: string;
        name: string;
    };
    
}