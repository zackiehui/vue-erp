<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
        <b-button>Student</b-button>
        </b-col>
        <b-col>
        <b-button variant="danger">Tutor</b-button>
        </b-col>
        <b-col>
        <b-button variant="success">Course</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      msg: 'Welcome to Dashboard in Vue',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 200px;
  height: 200px;
}
</style>
