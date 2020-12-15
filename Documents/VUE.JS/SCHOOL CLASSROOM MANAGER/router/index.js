import Vue from 'vue'
import Router from 'vue-router'
import Students from './Student'
import Classrooms from './Classroom'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/students',
            name: 'Students',
            component: Students
        },
        {
            path: '/classrooms',
            name: 'Classrooms',
            component: Classrooms
        }
    ]
})
