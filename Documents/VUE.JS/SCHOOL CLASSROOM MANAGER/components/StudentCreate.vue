<template lang="html">
  <div>
    <el-container class="container">
      <div class="student-create-form">
        <el-form :model="studentForm" :rules="rules" ref="studentForm" label-width="120px">
          <el-form-item label="First Name" prop="first_name">
            <el-input v-model="studentForm.first_name"></el-input>
          </el-form-item>
          <el-form-item label="Last Name" prop="last_name">
            <el-input v-model="studentForm.last_name"></el-input>
          </el-form-item>
          <el-form-item label="Grade" prop="grade">
            <el-input v-model="studentForm.grade"></el-input>
          </el-form-item>
          <el-form-item label="Class ID" prop="class_id">
            <el-select v-model="studentForm.class_id" placeholder="Please choose">
              <el-option label="Class One" value="1"></el-option>
              <el-option label="Class Two" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('studentForm')" v-loading="loading.create">
              <span v-if="loading.create">Processing...</span>
              <span v-if="!loading.create">Add Students</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-container>
  </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import { student as StudentRoutes } from '@/api'

    export default {
        data () {
            return {
                studentForm: {
                    last_name: '',
                    first_name: '',
                    grade: '',
                    class_id: ''
                },
                rules: {
                    last_name: [
                        { required: true, message: 'Please enter last name', trigger: 'blur' },
                        { min: 1, max: 10, message: 'Please enter between 1 and 10 characters', trigger: 'blur' }
                    ],
                    first_name: [
                        { required: true, message: 'Please enter first name', trigger: 'blur' },
                        { min: 1, max: 10, message: 'Please enter between 1 and 10 characters', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'Please enter  student grade', trigger: 'blur' },
                        { type: 'email', message: 'Please enter grade correctly', trigger: 'blur,change' }
                    ],
                    class_id: [
                        { required: true, message: 'Please select a class', trigger: 'blur' }
                    ]
                },
                loading: {
                    create: false,
                    update: false
                }
            }
        },

        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.createUser()
                    } else {
                        return false
                    }
                })
            },

            createUser () {
                let payload = this.studentForm
                let apiRoute = StudentRoutes.create()

                Vue.set(this.loading, 'create', true)
                axios.post(apiRoute, payload)
                    .then(() => {
                        this.$alert('Successfully added students', 'success')
                        Vue.set(this.loading, 'create', false)
                    })
                    .catch(({ message }) => {
                        this.$alert(message.data, 'failure')
                        Vue.set(this.loading, 'create', false)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
  .student-create-form {
    width: 600px;
  }

  .el-form-item__error {
    padding: 0;
  }
</style>