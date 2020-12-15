import Student from '@/components/Students'
import StudentCreate from '@/components/StudentCreate'

export default {
  path: '/students',
  name: 'students.show',
  component: Student,
  children: [
    {
      path: 'create',
      name: 'student.create',
      component: StudentCreate
    }
  ]
}
