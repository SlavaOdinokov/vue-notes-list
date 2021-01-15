<template>
  <nav class="navbar light-blue lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('clickBtnNav')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <a href="#" class="black-text exit hoverable" @click.prevent="logout">
        <i class="material-icons">assignment_return</i>Выйти
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null
  }),
  methods: {
    logout() {
      console.log("logout");
      this.$router.push("/login?message=logout");
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.exit {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100px;
  font-weight: 600;
}
</style>
