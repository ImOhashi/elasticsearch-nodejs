import express, { Request, Response } from "express";

import getClient from "./client/elasticsearch";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const client = getClient();

  const result = await client.index({
    index: "elastic_test",
    type: "type_elastic_test",
    body: {
      user: "Test",
      password: "test",
      email: "test@test.com",
    },
  });

  return res.json(result);
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});
