export default build =>
  build.query({
    query: ( (id)  => ({
      url: `WorkTaskDBT`,
      // When performing a mutation, you typically use a method of
      // PATCH/PUT/POST/DELETE for REST endpoints
      method: 'POST',
      // fetchBaseQuery automatically adds `content-type: application/json` to
      // the Headers and calls `JSON.stringify(patch)`
      body: JSON.stringify({
        action: 'filter',
        recordId: id,
      }),
    })),
  })
