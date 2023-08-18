<template>
<main>
  <header>
    <img src="./assets/reshot-icon-brandenburg-gate-DA34ZM8UJT.svg" alt="german course"/>
    <h1>German Courses</h1>
    
  </header>

  <nav class="filter">
    <button v-on:click="filter='all'">Kurse ({{ kursStore.insgesamt }}) </button>
    <button v-on:click="filter='favoriten'">Favoriten ({{ kursStore.favoritenNummer }})</button>
  </nav>

  <div class="kurs-listeler" v-if="filter==='all'">
    <div v-for="kurs in kursStore.kurse" :key="kurs.id">
      <KursDetail :kurs="kurs"/>
    </div>
  </div>
  <div class="kurs-listeler" v-if="filter==='favoriten'">
    <div v-for="kurs in kursStore.favs" :key="kurs.id">
      <KursDetail :kurs="kurs"/>
    </div>
  </div>



</main>
</template>

<script>
import KursForm from './components/KursForm.vue'
import {useKursStore} from './stores/kursStore'
import KursDetail from './components/KursDetail.vue'
import {ref} from 'vue'


  export default {
    setup(){
      const kursStore = useKursStore()
      const filter = ref('all')

      return{kursStore, filter}

      
    },
    components:{
      KursDetail,
      KursForm
    }
  }
</script>