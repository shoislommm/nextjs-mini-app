// pages/api/data
// import nc from 'next-connect';
// // import cors from 'cors'

// const handler = nc()
//   // use connect based middleware
//   // .use(cors())
//   // express like routing for methods
//   .get((req, res) => {
//     res.send('Hello world')
//   })
//   .post((req, res) => {
//     res.json({ hello: 'world' })
//   })
//   .put(async (req, res) => {
//     res.end('hello')
//   })

// export default handler;


export default async function handler(req, res) {
  switch (req.method) {
    case "GET": {
      // return getNotes(req, res)
      return res.send('Hello world')
    }
    case "POST": {
      return res.json({ hello: 'world' })
    }
    case "PUT": {
      return res.end('hello')
    }

    default: {
      return res.status(405).json({ status: "fail", message: `${req.method} is not allowed` })
    }
  }
}


// async function getNotes(req, res) {
//   try {
//     const notes = "hello"

//     return res.status(200).json(notes)
//   } catch (error) {

//   }
// }

