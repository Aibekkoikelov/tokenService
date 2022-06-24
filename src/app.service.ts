import { Injectable } from '@nestjs/common';
import {EventPattern, MessagePattern} from "@nestjs/microservices";
import {CreateTokenDto} from "./dto/create-token.dto";
import {JwtService} from "@nestjs/jwt";
import {Observable} from "rxjs";
@Injectable()
export class AppService {
 constructor(private jwtService: JwtService) {
 }

 private readonly  tokens = []

  getToken():string {
    return this.tokens.pop()
  }
  verifyToken(token: string):string{
     try {
         const user = this.jwtService.verify(token)
         if(user){
             // const newToken = this.jwtService.sign(user)
             this.tokens.push(token)
         }else{
             return null
         }
     }catch (e){
            this.tokens.push(null)
     }
    return "true"
     }

}
