<template>
  <div>
    <h2>About</h2>
    <div class="grid grid-cols-2 gap-10">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consequuntur
        reiciendis soluta sed excepturi suscipit tenetur delectus vero omnis
        quasi nam ratione nobis, est unde. Earum, sapiente vitae amet, pariatur
        labore id veritatis perspiciatis illo officia doloribus voluptatum
        facilis fuga molestiae, nesciunt animi ducimus obcaecati neque in non
        incidunt? Fuga quis eius hic ut magnam nobis et alias cum excepturi
        totam voluptas, deserunt sed veritatis incidunt cupiditate non aliquam
        optio. Quidem sapiente, nemo nobis tenetur labore suscipit, omnis amet
        voluptates alias itaque voluptate eos eaque laborum perferendis sit
        corrupti perspiciatis, totam maxime reprehenderit? Eos unde neque sint.
        Porro, id? Minus sunt quasi maxime sint omnis quis obcaecati nesciunt
        culpa, recusandae amet dolor, quaerat quidem esse sequi veritatis alias
        praesentium tenetur magni. Dolor sunt dicta expedita sint, unde placeat
        praesentium? Aspernatur doloribus iusto animi temporibus.
      </p>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, qui reprehenderit. Quidem, eveniet quibusdam
          perspiciatis ipsum ducimus labore alias, obcaecati harum laborum vel
          distinctio! Voluptate, ea quas aliquam facere sunt illum quidem.
          Ducimus, veritatis dignissimos ratione culpa quam quos! Non nemo
          voluptas veniam similique ipsa sequi eos distinctio. Voluptate
          voluptatem vitae, provident velit enim ut. Fuga assumenda soluta
          magnam quasi nesciunt, suscipit cupiditate dicta temporibus in
          reprehenderit ullam ipsa, maiores voluptatibus!
        </p>
        <p>
          Voluptatem ex hic sapiente labore, ducimus corporis assumenda esse
          porro tempore, cum, tempora dolor saepe! Perspiciatis explicabo, quos
          non modi at sed, deleniti enim laudantium error itaque fuga nisi
          similique dolorum facilis dolores provident! Cumque incidunt ipsa
          praesentium minus. Dignissimos eligendi exercitationem rerum ipsa
          velit animi at, ducimus tempore dolorum optio tenetur placeat ipsum?
          Enim porro odit dolorem numquam nemo provident quos amet reprehenderit
          nihil. Eum laudantium illum quas explicabo quaerat? Cum, praesentium
          eos asperiores aliquid tempora obcaecati illum est neque. Provident
          illum fugiat asperiores voluptatibus. Eligendi corrupti sapiente
          tenetur consequuntur explicabo beatae inventore quas sint rerum
          necessitatibus dolores expedita natus, fugit error rem aspernatur!
          Inventore cumque soluta voluptatibus nostrum impedit a cupiditate
          expedita aperiam numquam beatae voluptatum quasi, facere error
          distinctio unde porro, eum ipsum nihil. Eligendi, quidem.
        </p>
      </div>
    </div>
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
