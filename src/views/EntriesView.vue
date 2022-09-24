<template>
  <div>
    <div>
      <h1>This is an entry page: </h1>
      <router-link to="/entries/add">
        <v-btn class="ma-2" color="primary" elevation="8" dark >
          Add
          <v-icon dark right>
            mdi-plus-thick
          </v-icon>
        </v-btn>
      </router-link>
    </div>
    <v-simple-table>
      <template v-slot:default v-if="entriesState.entries.length > 0">
        <thead>
          <tr>
            <th class="text-left">
              API
            </th>
            <th class="text-left">
              Description
            </th>
            <th class="text-left">
              Auth
            </th>
            <th class="text-left">
              HTTPS
            </th>
            <th class="text-left">
              Cors
            </th>
            <th class="text-left">
              Link
            </th>
            <th class="text-left">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in entriesState.entries" :key="item.id">
            <td>{{ item.API }}</td>
            <td>{{ item.Description }}</td>
            <td>{{ item.Auth }}</td>
            <td>{{ item.HTTPS }}</td>
            <td>{{ item.Cors }}</td>
            <td>{{ item.Link }}</td>
            <td>{{ item.Category }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- <pre>entriesState.entries : {{entriesState.entries}}</pre> -->
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

<style scoped>
a {
  text-decoration: none;
}
</style>