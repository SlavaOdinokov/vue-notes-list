<template>
  <nav class="navbar light-blue lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('clickBtnNav')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date }}</span>
      </div>

      <div class="black-text right-wrapper">
        <span class="user-name">{{ name }}</span>
        <a href="#" class="black-text exit hoverable" @click.prevent="logout">
          <i class="material-icons">assignment_return</i>
          <span>Выйти</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import dateFilter from "@/utils/dateFilter";

export default {
  name: "Navbar",
  data: () => ({
    date: dateFilter(new Date(), "datetime"),
    interval: null
  }),
  computed: {
    name() {
      return this.$store.getters.info.name;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = dateFilter(new Date(), "datetime");
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.right-wrapper {
  display: flex;
  font-weight: 500;
}
.user-name {
  margin-right: 20px;
}
.exit {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100px;
}
</style>
