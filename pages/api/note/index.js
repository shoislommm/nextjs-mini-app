import notes from "../../../src/data/data"

export default function handler(req, res) {
  switch (req.method) {
    case "GET": {
      res.json({ data: notes })
    }
    case "POST": {
      const id = Date.now()
      const note = { ...req.body, id }

      notes.push(note)
      res.json({ data: note })
    }
  }
}