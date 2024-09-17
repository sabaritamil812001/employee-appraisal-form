<template>
  <div class="survey">
    <h1>Employee Appraisal Survey</h1>
    <div v-if="questions.length > 0">
      <div v-if="currentPart < 5">
        <h2>Part {{ currentPart + 1 }}</h2>
        <form @submit.prevent="handleSubmit">
          <div
            v-for="(question, index) in currentQuestions"
            :key="index"
            class="question"
          >
            <p>{{ question.question }}</p>
            <component
              :is="getInputComponent(question.type)"
              v-model="responses[index]"
              v-bind="getInputProps(question)"
              :required="true"
            ></component>
          </div>
          <div class="navigation">
            <button @click="prevPart" :disabled="currentPart === 0">
              Previous
            </button>
            <button @click="nextPart" :disabled="currentPart === 4">
              Next
            </button>
            <button v-if="currentPart === 4" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div v-else>
        <h2>Thank you for completing the survey!</h2>
      </div>
    </div>
    <div v-else>
      <p>Loading questions...{{ questions.length }}</p>
    </div>
  </div>
</template>

<script>
import RadioInput from "./RadioInput.vue";
import CheckboxesInput from "./CheckboxesInput.vue";
import SliderInput from "./SliderInput.vue";
import RangeInput from "./RangeInput.vue";
import TextareaInput from "./TextareaInput.vue";
import EmailInput from "./EmailInput.vue";
import TextInput from "./TextInput.vue";
import axios from "axios";

export default {
  components: {
    RadioInput,
    CheckboxesInput,
    SliderInput,
    RangeInput,
    TextareaInput,
    EmailInput,
    TextInput,
  },
  data() {
    return {
      questions: [], // Initialize as an empty array
      responses: Array(50).fill(""),
      currentPart: 0,
    };
  },
  computed: {
    currentQuestions() {
      const start = this.currentPart * 10;
      const end = start + 10;
      return this.questions.slice(start, end);
    },
  },
  methods: {
    fetchQuestions() {
      try {
        axios
          .get("http://localhost:3000/questions")
          .then((response) => [(this.questions = response.data)]);
        //console.log(await response.json());

        console.log(`Inga varuthu`);
      } catch (error) {
        console.error("Failed to load questions:", error);
        this.questions = []; // Handle error by setting questions to an empty array
      }
    },
    getInputComponent(type) {
      switch (type) {
        case "radio":
          return "RadioInput";
        case "checkboxes":
          return "CheckboxesInput";
        case "slider":
          return "SliderInput";
        case "range":
          return "RangeInput";
        case "textarea":
          return "TextareaInput";
        case "email":
          return "EmailInput";
        case "text":
          return "TextInput";
        default:
          return "TextInput";
      }
    },
    getInputProps(question) {
      switch (question.type) {
        case "slider":
        case "range":
          return { min: question.min, max: question.max };
        case "checkboxes":
          return { options: question.options };
        default:
          return {};
      }
    },
    nextPart() {
      if (this.currentPart < 4) {
        this.currentPart++;
      }
    },
    prevPart() {
      if (this.currentPart > 0) {
        this.currentPart--;
      }
    },
    handleSubmit() {
      alert("Survey submitted!");
      console.log("Responses:", this.responses);
      // Handle the form submission logic here, e.g., sending data to a server
    },
  },
  created() {
    this.fetchQuestions();
  },
};
</script>

<style scoped>
.survey {
  max-width: 800px;
  margin: auto;
}

.question {
  margin-bottom: 20px;
}

.navigation {
  margin-top: 20px;
}

button {
  margin-right: 10px;
}
</style>
