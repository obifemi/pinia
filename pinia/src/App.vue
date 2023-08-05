<template>
<main>
  <header>
    <img src="./assets/reshot-icon-brandenburg-gate-DA34ZM8UJT.svg" alt="german course"/>
    <h1>German Courses</h1>
    
  </header>

  <div class="kurs-listeler">
    <div v-for="kurs in kursStore.kurse" :key="kurs.id">
      <KursDetail :kurs="kurs"/>
    </div>
  </div>

</main>
</template>

<script>
import {useKursStore} from './stores/kursStore'
import KursDetail from './components/KursDetail.vue'

  export default {
    setup(){
      const kursStore = useKursStore()

      return{kursStore}
    },
    components:{
      KursDetail
    }
  }
</script>