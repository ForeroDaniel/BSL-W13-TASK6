import { Body, Controller, Delete, Get, Head, Options, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('blue')
export class BlueController {

/** http://localhost:3000/blue?queryEjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3 */

  @Get()  
  findGet(
    @Query('queryEjemploGet1') queryEjemploGet1: string,
    @Query('queryEjemploGet2') queryEjemploGet2: string,
    @Query('queryEjemploGet3') queryEjemploGet3: string,
  ) {
    
    const queryEjemploGet1_ = parseInt(queryEjemploGet1, 10);
    const queryEjemploGet2_ = parseInt(queryEjemploGet2, 10);
    const queryEjemploGet3_ = parseInt(queryEjemploGet3, 10);
    
    return { 
      nombre: 'get', 
      queryEjemploGet1_, 
      queryEjemploGet2_,
      queryEjemploGet3_,}
  }

  @Post()
  create(@Body() body: any) {
    return { nombre: 'post', receivedData: body }
  }

  @Put(':id')
  put(@Param('id') id: string, @Body() body: any) {
    return { nombre: 'put', routeParam: id, receivedData: body};
  }

  @Patch()
  findPatch() {
    return { nombre: 'patch'}
  }
  
/**http://localhost:3000/blue/1 */

  @Delete(':EjemploDelete')
  remove(@Param('EjemploDelete') EjemploDelete: string) {
    const queryEjemploDelete = parseInt(EjemploDelete, 10);
    return { nombre: 'delete', queryEjemploDelete}
  }

  @Options()
  findOptions() {
    return { nombre: 'options'}
  }

  @Head()
  findHead() {
    return { nombre: 'head'}
  }
}
