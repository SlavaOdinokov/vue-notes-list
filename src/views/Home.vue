<template>
  <div class="home">
    <div class="page-title">
      <h3>Мои заметки</h3>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">Заметок пока нет</p>

    <div v-else class="row">
      <Notes :records="records" />
    </div>
  </div>
</template>

<script>
import Notes from "@/components/Notes";
import timeConversion from "@/utils/timeConversion";

export default {
  name: "Home",
  components: { Notes },
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    const records = await this.$store.dispatch("fetchRecords");
    records.reverse();

    this.records = records.map(record => {
      return {
        ...record,
        fromTheMoment: timeConversion(Date.now() - record.date)
      };
    });

    this.loading = false;
  }
};
</script>
