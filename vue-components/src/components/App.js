// src/components/App.js

import UserList from './UserList'
import ButtonCounter from './ButtonCounter'

export default {
    name: 'App',
    components:{
        UserList,
        ButtonCounter
    },
    template: `
      <div class="container mx-auto p-4">
        <h4>Hello World</h4>
        <button-counter></button-counter>
        <h1>Users</h1>
        <user-list class="mt-6"></user-list>
      </div>
    `,
  };