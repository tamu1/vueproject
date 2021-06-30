<template>
<v-container>
  <v-row class="text-center">
    <v-col cols="12">
      
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>phone</th>
          <th>company name</th>
          
      </tr>
        <tr v-for="user in this.users" :key="user.id">
          
      
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.company.name}}</td>
          
      </tr>

        </table>
        <button @click="alertHello">say hello</button>
        
    </v-col>
  </v-row>
</v-container>

  
</template>


<script>
import firstMixin from '../mixins/firstMixin';


export default {
  name: 'HelloWorld',
  mixins: [firstMixin],
  data: () => ({
     
  }),
  
 }

</script>

