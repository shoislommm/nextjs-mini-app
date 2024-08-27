import notes from "../../../src/data/data"

const getNote = id => notes.find(n => n.id === parseInt(id))

export default function handler(req, res) {
  switch (req.method) {
    case "GET": {

      const note = getNote(req.query.id)

      if (!note) {
        res.status(404)
        res.end()
        return
      }

      return res.json({ data: note })
    }
    case "PATCH": {
      const note = getNote(req.query.id)

      if (!note) {
        res.status(404)
        res.end()
        return
      }

      const i = notes.findIndex(n => n.id === parseInt(req.query.id))
      const updated = { ...note, ...req.body }

      notes[i] = updated
      return res.json({ data: updated })
    }
    case "DELETE": {
      const note = getNote(req.query.id)

      if (!note) {
        res.status(404)
        res.end()
        return
      }
      const i = notes.findIndex(n => n.id === parseInt(req.query.id))

      notes.splice(i, 1)

      return res.json({ data: req.query.id })
    }
  }
}
