<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <div class="title">OSS文件列表</div>
    <ul>
      <li v-for="ossName in ossList">
        {{ ossName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OSSList",
  data() {
    return {
      ossList: []
    }
  },
  created() {
    this.getOssList();
  },
  methods: {

    //  点击刷新
    getOssList() {
      let that = this;
      this.axios({
        url: '/oss/getObjectList',
        method: 'get',
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (e) {
        if (e.data.code === "00000") {
          that.ossList = e.data.data;
        }else {
          alert(e.data.msg);
        }
      })
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
