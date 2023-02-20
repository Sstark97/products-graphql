import { createApp } from "./api/app.js";

const port = process.env.PORT || 3000;
const app = await createApp();

app.listen(port, () => {
  console.log(`Listen on port: ${port}`);
});
