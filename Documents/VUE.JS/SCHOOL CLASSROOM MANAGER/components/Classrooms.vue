<template lang="html">
  <h3>Classrooms:</h3>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Classrooms',
        data() {
            return {
                classrooms: null,
            };
        },
    
        created: function() {
        axios
            .get('http://localhost:8000/classrooms/getclasses')
            .then(res => {
            this.classrooms = res.data;
            })
        }
    }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>