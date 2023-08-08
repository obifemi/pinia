import {defineStore} from 'pinia'

 export const useKursStore = defineStore('kursStore', {
    state:()=>({
        kurse:[
            {id:1, title:'A1 German Course', isFav:false},
            {id:2, title:'B1 German Course',isFav:true},
            {id:3, title:'B2 German Course',isFav:true},
        ]
    }),
    getters:{
        favs(){
            return this.kurse.filter(kurs=>kurs.isFav===true)
        },
        favoritenNummer(){
            return this.kurse.reduce((p,c)=>{
               return c.isFav ? p+1 : p
            },0)
        },
        insgesamt(){
            return this.kurse.length
        }
    },

    action:{
        hinzuKurs{
            this.kurse.push(kurs)
        }
    }
})

