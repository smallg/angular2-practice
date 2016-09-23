/**
 * Created by wenpeng.guo on 9/23/16.
 */
import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}