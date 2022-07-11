import { Query, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CragsService } from './crags.service';
import { Crag } from './entities/crags.entity'

@Controller('crags')
export class CragsController { }
