<template>
    <div class="kurs">
        <h3>
            {{kurs.title}}
        </h3>
        <div class="icons">
            <i class="material-icons">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['kurs']
    }
</script>