import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ITileState } from '../interfaces'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  state$: Observable<object>;
  currentID: string = "1";

  constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state));

    this.state$.subscribe((state: ITileState)=>{
      if(state.id){
        console.log(`Got ${state.id} from state`);
        this.currentID = state.id;
      }
    });
  }

  clickNext(){
    this.currentID = String(this.cyclicIncrement(Number(this.currentID),1,53)); // @TODO fix magic numbers later
  }

  clickPrev(){
    this.currentID = String(this.cyclicDecrement(Number(this.currentID),1,53)); // @TODO fix magic numbers later
  }

  clickHome(){
    this.router.navigateByUrl('/', { state: { id: this.currentID } });

  }

  cyclicIncrement(n: number, min: number, max: number){
    if(!Number.isInteger(n)||n<min || n>max) throw new Error(`Number to increment outside of range (min-max)`);
    return (n++===max)?min:n;
  }

  cyclicDecrement(n: number, min: number, max: number){
    if(!Number.isInteger(n)||n<min || n>max) throw new Error(`Number to increment outside of range (min-max)`);
    return (n--===min)?max:n;
  }
}

