export default defineEventHandler(async (event) => {
  //handle query params
  const { name } = getQuery(event);

  //handle POST data
  const { age } = await readBody(event);

  // ---- Use server routes to keep api key hidden from frontend user
  //api call with private key
  //const { data } await $fetch('* -- INSER API KEY -- *')

  // ---- DYNAMIC SERVER ROUTE ----
  return {
    message: `Hello, ${name}! You are ${age} years old`,
  };
});
