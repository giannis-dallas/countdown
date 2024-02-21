const jsonServer = require('json-server')
const server = jsonServer.create()

const PORT = process.env.PORT || 3000; // Render.com will provide the port via environment variable

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});