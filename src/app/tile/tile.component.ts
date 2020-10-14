import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlphabetData } from '../interfaces';
import { DataService } from '../data.service';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  private _tileID: string;
  @Input() set tileID(value: string){
    this._tileID = value;
   // this.updateImagePath(value);
   this.dataService.getAlphabetData().subscribe((dataJSON: IAlphabetData) =>{
    this.alphabetData = dataJSON;
    this.updateTileData(value);
  });
  };
  private _active: boolean = true;
  @Input() set active(value: boolean){
    this._active = value;
  }
  @Output() public getID = new EventEmitter<string>();
  public sendIDOnClick() {
      this.getID.emit(this._tileID);
      console.log(`You clicked on tile: ${this._tileID}`);
  }

  get tileID(): string{
    return this._tileID;
  }
  currentLetter: string = ""; 
  currentWord: string = "";
  currentImagePath: string = "https://datsan.openbroadcaster.pro/download.php?id=3053";
  private alphabetData: IAlphabetData;
  private currentAudioPath: string = "test";

  constructor(private dataService: DataService, private audio: AudioService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // this.sendID();
  }

  clickImage(){
    if(! this._active) return;
    this.getID.emit(this.tileID);
    this.audio.playAudio(this.createAudioPath("word",this.tileID));
  }

  clickLetter() {
    if(! this._active) return;
    this.audio.playAudio(this.createAudioPath("letter",this.tileID));
  }

  clickWord(){
    if(! this._active) return;
    this.audio.playAudio(this.createAudioPath("word",this.tileID));
  }

  private updateImagePath(id: string){
    this.currentImagePath = this.createImagePath(id);
  }

  private createImagePath(tileNumber: string): string{
    let singleDigitTileNumber: boolean = Number(tileNumber)<10;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    return singleDigitTileNumber?`assets/images/Picture0${tileNumber}.png`:`assets/images/Picture${tileNumber}.png`;
    // return "https://datsan.openbroadcaster.pro/download.php?media_id=3053"
  }

  private createAudioPath(context:string, tileNumber: string): string{
    context = context.toLowerCase();
    if(!(context === "word") && !(context === "letter")) throw new Error("Context must be one of: 'word','letter'");
    let singleDigitTileNumber: boolean = Number(tileNumber)<10;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    if(context === "word") return singleDigitTileNumber?`assets/sounds/S0${tileNumber}.mp3`:`assets/sounds/S${tileNumber}.mp3`;
    return singleDigitTileNumber?`assets/sounds/L0${tileNumber}.mp3`:`assets/sounds/L${tileNumber}.mp3`;

  }

  private updateLetter(id: string){
    id = String(Number(id) - 1);
    let newLetter: string = this.alphabetData.letter[id];
    console.log(`New Letter: ${newLetter}`);
    (newLetter)? this.currentLetter = newLetter : this.currentLetter = "";
  }

  private updateWord(letter: string){
    let newWord: string = this.alphabetData.word[letter];
    console.log(`New word: ${newWord}`);
    (newWord)? this.currentWord = newWord: this.currentWord = "";
  }
/*
  private updateAudioPath(id: string){
    this.currentAudioPath = this.createAudioPathForWord(id);
  }
  */

  private updateTileData(id: string){
    console.log(`Updating data for tile: ${id}`)
    this.updateImagePath(id);
    // this.updateAudioPath(id);
    this.updateLetter(id);
    this.updateWord(this.currentLetter);
  }

}
