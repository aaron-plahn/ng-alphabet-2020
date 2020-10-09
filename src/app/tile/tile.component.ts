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
  @Output() getID = new EventEmitter<string>();

  get tileID(): string{
    return this._tileID;
  }
  currentLetter: String = ""; 
  currentWord: String = "";
  currentImagePath: string = "https://datsan.openbroadcaster.pro/download.php?id=3053";
  private alphabetData: IAlphabetData;
  private currentAudioPath: string = "test";

  constructor(private dataService: DataService, private audio: AudioService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.sendID();
  }

  sendID(){
    this.getID.emit(this.tileID);
    this.audio.playAudio(this.currentAudioPath);
  }

  private updateImagePath(id: string){
    this.currentImagePath = this.createImagePath(id);
  }

  private createImagePath(tileNumber: string): string{
    let singleDigitTileNumber: boolean = Number(tileNumber)<10;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    // return singleDigitTileNumber?`assets/images/p0${tileNumber}.png`:`assets/images/p${tileNumber}.png`;
    return "https://datsan.openbroadcaster.pro/download.php?media_id=3053"
  }

  private createAudioPathForWord(tileNumber: string): string{
    let singleDigitTileNumber: boolean = Number(tileNumber)<10;
    console.log(`Number: ${Number(tileNumber)} is bigger than 9? ${singleDigitTileNumber}`)
    return singleDigitTileNumber?`assets/sounds/S0${tileNumber}.png`:`assets/sounds/S${tileNumber}.mp3`;
  }

  private updateLetter(id: string){
    let newLetter: string = this.alphabetData.letter[id];
    console.log(`New Letter: ${newLetter}`);
    (newLetter)? this.currentLetter = newLetter : this.currentLetter = "";
  }

  private updateWord(id: string){
    (this.alphabetData)? this.currentWord = this.alphabetData.word[id]: this.currentWord = "";
  }

  private updateAudioPath(id: string){
    this.currentAudioPath = this.createAudioPathForWord(id);
  }

  private updateTileData(id: string){
    this.updateImagePath(id);
    this.updateAudioPath(id);
    this.updateLetter(id);
    this.updateWord(id);
  }

}
