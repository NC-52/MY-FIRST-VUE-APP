<template lang="html">
  <h3>Teachers:</h3>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Teachers',
        data() {
            return {
                teachers: null,
            };
        },
    
        created: function() {
        axios
            .get('http://localhost:8000/teachers/getteachers')
            .then(res => {
            this.teachers = res.data;
            })
        }
    }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>