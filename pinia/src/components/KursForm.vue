<template>
 <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Kurs Titel" v-model="neuKurs">
    <button>Hinzufügen</button>
 </form>
</template>

<script>
import {ref} from 'vue'
import { useKursStore } from '../stores/kursStore';

    export default {
        setup(){
            const kursStore = useKursStore()
            const neuKurs = ref('')
            
            const handleSubmit = ()=>{
                if (this.neuKurs.length>0){
                    kursStore.hinzuKurs({
                        title:neuKurs.value,
                        isFav:false,
                        id: Math.floor(Math.random()*1000000)
                    })
                    neuKurs=""
                }
                
            }
            return {handleSubmit, neuKurs}
        }
    }
</script>