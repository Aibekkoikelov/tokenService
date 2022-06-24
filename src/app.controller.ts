import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {EventPattern, MessagePattern} from "@nestjs/microservices";
import {CreateTokenDto} from "./dto/create-token.dto";
import {Observable} from "rxjs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: "newToken"})
  getToken():string {
    return this.appService.getToken();
  }

  @EventPattern('create-token')
  createToken(data: string){
    return  this.appService.verifyToken(data);
  }
}
