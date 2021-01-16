<template>
  <div>
    <div class="page-title">
      <h3>Новая заметка</h3>
    </div>

    <form class="form" @submit.prevent="onSubmit">
      <div class="input-field">
        <input
          id="title"
          type="text"
          v-model="title"
          :class="{ invalid: $v.title.$dirty && !$v.title.required }"
        />
        <label for="title">Название заметки</label>
        <small
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
        >
          Введите название
        </small>
      </div>

      <div class="input-field">
        <textarea
          id="description"
          type="text"
          class="materialize-textarea"
          v-model="description"
          :class="{ invalid: $v.description.$dirty && !$v.description.required }"
        ></textarea>
        <label for="description">Описание заметки</label>
        <small
          class="helper-text invalid"
          v-if="$v.description.$dirty && !$v.description.required"
        >
          Введите описание
        </small>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import dateFilter from "@/utils/dateFilter";

export default {
  name: "Record",
  data: () => ({
    title: "",
    description: ""
  }),
  validations: {
    title: { required },
    description: { required }
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        title: this.title,
        description: this.description,
        date: Date.now(),
        dateOfCreation: dateFilter(new Date(), "datetime")
      };

      try {
        await this.$store.dispatch("createRecord", formData);
        this.$message("Заметка успешно создана");
        this.$v.$reset();
        this.title = "";
        this.description = "";
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
