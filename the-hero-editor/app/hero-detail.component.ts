/**
 * Created by wenpeng.guo on 9/23/16.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Hero} from "./hero";
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(private  heroSerice: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroSerice.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
}