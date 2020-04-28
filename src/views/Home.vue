<template>
	<div class="home container">
		<Alert v-if="alert" v-bind:message="alert"></Alert>
		<h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>姓名</th>
					<th>电话</th>
					<th>邮箱</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="customer in filterBy(customers,filterInput)" :key="customer.index">
					<td>{{customer.name}}</td>
					<td>{{customer.phone}}</td>
					<td>{{customer.email}}</td>
					<td><router-link class="btn btn-default" :to="'CustomerDetails/'+ customer.id">详情</router-link></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import Alert from "../components/Alert.vue";
export default {
  name: "Home",
  data() {
    return {
      customers: [],
      alert: ""
    };
  },
  methods: {
    getcustomers() {
      this.$http.get("http://localhost:3000/users").then(function(response) {
        // console.log(response);
        this.customers = response.body;
      });
    },
    filterBy(customers,value){
      return customers.filter(function(customer){
        return customer.name.match(value)
      })
    }
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.getcustomers();
  },
  updated() {
    this.getcustomers();
  },
  components: {
    Alert
  }
};
</script>
