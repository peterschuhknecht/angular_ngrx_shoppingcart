const express = require("express")
const app = express()

const products =
  [
    {
      id: 'product-0',
      title: 'Produkteee Eins',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
      price: 1245,
    },
    {
      id: 'product-1',
      title: 'Produkt Zwei',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
      price: 145,
    },
    {
      id: 'product-2',
      title: 'Produkt Drei',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      price: 27,
    },
    {
      id: 'product-3',
      title: 'Produkt Vier',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing dolor',
      price: 1065,
    },
    {
      id: 'product-4',
      title: 'Produkt Fünf',
      description:
        'At accusam dolor sit amet, consetetur sit dolores elitr',
      price: 459,
    },
    {
      id: 'product-5',
      title: 'Produkt Sechs',
      description:
        'At accusam dolor sit amet, consetetur sit dolores elitr',
      price: 459,
    },
    {
      id: 'product-6',
      title: 'Produkt Sieben',
      description:
        'At vero eos et accusam et justo duo dolores et ea rebum',
      price: 12,
    },
  ]
app.get("/api/products", (req, res) => {
  console.log("API CALL")
  res.json(products)
})

app.listen(3000)
