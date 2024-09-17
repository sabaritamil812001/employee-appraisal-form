<template>
  <div class="box">
    <h3>Employee Appraisal form</h3>
    <button class="formButton">
      <router-link :to="{ name: 'SurveyForm' }">
        <span class="btn">Start the Survey</span>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHome: true,
    };
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.box h3 {
  font-size: 42px;
}

.formButton {
  border-radius: 20px;
  padding: 20pxc;
  padding: 20px;
  width: 200px;
  text-align: center;
  color: white;
  background-color: blue;
  border: none;
}

.btn {
  color: white;
  text-decoration: none;
}
</style>
