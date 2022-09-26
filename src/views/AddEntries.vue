<template>
  <div class="align-text-center">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Add Entry</p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <form @submit.prevent="submitCreate()">
            <div class="mb-2">
              <input required v-model="entry.API" type="text" class="form-control" placeholder="API">
            </div>
            <div class="mb-2">
              <input required v-model="entry.Description" type="text" class="form-control" placeholder="Description">
            </div>
            <div class="mb-2">
              <input required v-model="entry.Auth" type="text" class="form-control" placeholder="Auth">
            </div>
            <div class="mb-2">
              <input required v-model="entry.HTTPS" type="text" class="form-control" placeholder="HTTPS">
            </div>
            <div class="mb-2">
              <input required v-model="entry.Cors" type="text" class="form-control" placeholder="Cors">
            </div>
            <div class="mb-2">
              <input required v-model="entry.Link" type="text" class="form-control" placeholder="Link">
            </div>
            <div class="mb-2">
              <input required v-model="entry.Category" type="text" class="form-control" placeholder="Category">
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-success m-flex" value="Create">
              <input type="submit" class="btn btn-success" value="Back" @click="back()">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import { EntriesService } from '@/services/EntriesService';
// import { mapGetters } from 'vuex';

export default {
  name: 'AddContact',
  data() {
    return {
      entry: {
        API: '',
        Description: '',
        Auth: '',
        HTTPS: '',
        Cors: '',
        Link: '',
        Category: ''
      }
    }
  },
  computed: {
    // ...mapGetters({
    //   entriesState: "createEntryState"
    // })
  },
  // async created() {
  //   try {
  //     let response = await EntriesService.getAllEntries();
  //     this.entries = response.data;
  //     console.log("entries", this.entries)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
  methods: {
    async submitCreate() {
      this.$store.state.entriesState.entriesList.entry = this.entry;
      this.$store.dispatch("entriesModule/createEntry")
      // try {
      //   let response = await EntriesService.createEntry(this.entry)
      //   console.log("response in add entries", response)
      //   if (response) {
      //     return this.$router.push('/')
      //   }
      //   else {
      //     return this.$router.push('/entries/add')
      //   }
      // }
      // catch (error) {
      //   console.log(error)
      // }
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.align-text-center {
  text-align: center;
}
.m-flex {
  margin: 0px 225px 0px 0px;
}
</style>
