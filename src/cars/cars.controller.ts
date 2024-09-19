import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  @Get()
  gatAllCars() {
    return['Toyota', 'Honda', 'Jepp']
  }
}
