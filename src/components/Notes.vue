<template>
  <div>
    <div v-for="record in records" :key="record.id">
      <div class="row">
        <div class="col s12 m8">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <p>{{ record.date | date("datetime") }}</p>
              <span class="card-title">{{ record.title }}</span>
              <p>{{ record.description }}</p>
            </div>
            <div class="card-action">
              <span class="white-text">
                С момента создания прошло: {{ record.fromTheMoment }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    records: {
      type: Array,
      required: true
    }
  }
};
</script>
