import {defineStore} from 'pinia'

 const useKursStore = defineStore('kursStore', {
    state:()=>({
        kurslar:[
            {id:1, title:'A1 German Course', isFav:false},
            {id:2, title:'B1 German Course',isFav:true},
            {id:3, title:'B2 German Course',isFav:true},
        ]
    })
})

export default useKursStore