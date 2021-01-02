import React from 'react';

export default class GotService extends React.Component {
    constructor(props){
       super(props)
       this._apiBase = 'https://anapioficeandfire.com/api'
    }

    async getResurse(url){
      const res = await fetch(`${this._apiBase}${url}`)
      if (!res.ok){
         throw new Error (`Something went wrong :${res.status}`)
      }
      return res.json()
    }

    async getAllCharacter(){
      const res  = await this.getResurse(`/characters?page=5&pageSize=10`)
       return res.map(item => this._transformCharacter(item))
    }

    async getCharacter(id){
      const char = await this.getResurse(`/characters/${id}`)
      return this._transformCharacter(char)
   
    }

    isSet(data){
      for (let key in data){
         if (!data[key]){
           data[key]="Unknown"
         }
      }
      return data
    }
    _transformCharacter(char){
      const data = {
         name:char.name,
         gender:char.gender,
         born:char.born,
         died:char.died,
         culture:char.culture
      }
       return this.isSet(data)
    }
}