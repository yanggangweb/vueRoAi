<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <router-link to="detail">Home</router-link>
    </div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

//  dfdsfa
import http from '../utils/http'
import api from '../utils/api'
export default {
  name: 'listMain',
  data () {
    return {
      msg: 'listMain'
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      let params = {
        longitude: 110.881768,
        latitude: 33.530919,
        mark: 'JINGDIAN',
        pageNum: 1,
        pageSize: 30,
        keywords: '',
        classifyids: '',
        sorttype: 0,
        code: 611000
      }
      const res = await http.get(api.merchant_list, params)
      if (res.data) {
        // debugger
        // alert('请求成功')
        console.log(res.data)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
