<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse
      ullam quaerat sed quod, totam laborum quisquam ut ea provident.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse
      ullam quaerat sed quod, totam laborum quisquam ut ea provident.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=Mario", {
  method: "post",
  body: { age: 30 },
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
