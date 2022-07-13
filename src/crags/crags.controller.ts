import { Query, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CragsService } from './crags.service';
import { Crag } from './entities/crags.entity'

@Controller('crags')
export class CragsController {
    @Get()
    getTest(): string {
        return "get test"
    }

    @Get(":id")
    getOne(@Param('id') cragId: number): string {
        return `crag id : ${cragId}`;
    }

    @Post()
    // create(@Body() movieData: CreateMovieDto) {
    create(): string {
        return "post test";
    }
}
