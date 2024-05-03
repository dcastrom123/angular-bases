import { Injectable } from '@angular/core';
import {v4 as uuid } from 'uuid';



import { Character } from '../interfaces/character.interface';
@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 20000
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 15000
    }];

    onNewCharacter(character: Character):void{
       const newCharacter: Character = { id: uuid(), ...character }
       this.characters.push(newCharacter);
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
    }
    
}