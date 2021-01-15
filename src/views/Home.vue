<template>
  <div class="home">
    <div class="page-title">
      <h3>Мои заметки</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m10">
        <div class="card blue-grey darken-2">
          <div class="card-content white-text">
            <p>15.01.2020г.</p>
            <span class="card-title">Название заметки</span>
            <p>
              Описание заметки. I am a very simple card. I am good at containing
              small bits of information. I am convenient because I require
              little markup to use effectively.
            </p>
          </div>
          <div class="card-action white-text">
            <span>С момента создания заметки прошло: 5ч</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
