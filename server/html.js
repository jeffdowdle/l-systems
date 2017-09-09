const createPage = (renderedApp, state) => `
  <html>
    <head>
      <title>L Systems</title>
      <link rel="stylesheet" href="/static/styles.css" />
    </head>
    <body>
      <div id="app-root">${renderedApp}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
`;


export default createPage;
