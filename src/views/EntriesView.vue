<template>
  <div>
    <h1>This is an about page</h1>
    <pre>entriesState.entries : {{entriesState.entries}}</pre>
  </div>
</template>

<script>
// import { EntriesService } from '@/services/EntriesService';
import { mapGetters } from 'vuex';

export default {
  name: "EntriesView",
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      entriesState: "getEntriesState"
    })
  },
  methods: {
  },
  async created () {
    this.$store.dispatch("entriesModule/getEntries")
    // try {
    //   let response = await EntriesService.getAllEntries();
    //   this.entries = response.data;
    //   console.log("entries", this.entries)
    // } catch (error) {
    //   console.log(error)
    // }
  },
}
</script>