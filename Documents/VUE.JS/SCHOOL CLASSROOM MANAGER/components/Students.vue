<template lang="html">
  <h3>Students:</h3>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Students',
        data() {
            return {
                students: null,
            };
        },
    
        created: function() {
        axios
            .get('http://localhost:8000/students/getstudents')
            .then(res => {
            this.students = res.data;
            })
        }
    }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>