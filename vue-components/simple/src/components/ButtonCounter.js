// src/components/App.js
export default {
    data: function () {
      return {
        count: 0
      }
    },
    name: 'ButtonCounter',
    template: `
       <button v-on:click="count++">You clicked me {{ count }} times.</button>
    `
  };
