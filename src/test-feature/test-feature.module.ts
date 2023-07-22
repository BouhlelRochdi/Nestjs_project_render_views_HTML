/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TestFeatureController } from './test-feature.controller';
import { TestFeatureService } from './test-feature.service';


@Module({
    imports: [
    ],
    controllers: [TestFeatureController,],
    providers: [TestFeatureService,],
    exports: [TestFeatureService,]
})
export class TestFeatureModule { }
