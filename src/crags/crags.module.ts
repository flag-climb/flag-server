import { Module, Controller } from '@nestjs/common';
import { CragsService } from './crags.service';
import { CragsController } from './crags.controller';

@Module({
  controllers: [CragsController],
  providers: [CragsService]
})
export class CragsModule { }
