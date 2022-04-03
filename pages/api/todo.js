// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import list from "../../fakeData/todo.json";

export default function handler(req, res) {
  res.status(201).json(list);
}
