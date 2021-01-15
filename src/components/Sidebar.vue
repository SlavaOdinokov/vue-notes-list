<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.to"
      tag="li"
      active-class="active"
      :to="link.to"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Мои заметки", to: "/", exact: true },
      { title: "Новая запись", to: "/record" }
    ]
  })
}
</script>
