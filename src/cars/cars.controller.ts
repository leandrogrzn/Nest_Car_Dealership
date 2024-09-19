import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = ['Toyota', 'Honda', 'Jepp'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById( @Param('id') id ) {

    console.log({ id })

    return this.cars[id];
  }

}
