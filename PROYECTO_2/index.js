const PRODUCTS = [
  {
    name: 'Pro Plan Cachorros 15+3 Kg',
    price: 79.99,
    img: './assets/Pro-plan-puppy.png',
    stars: 4,
    type: 'Alimentos'
  },
  {
    name: 'Pro Plan Adultos 15 Kg',
    price: 72.0,
    img: './assets/Pro_plan_adult.png',
    stars: 4,
    type: 'Alimentos'
  },
  {
    name: 'Pro Plan Gatos 7,5 Kg',
    price: 55.0,
    img: './assets/Pro-plan-cat.png',
    stars: 4,
    type: 'Alimentos'
  },
  {
    name: "Hill's Adulto 13 Kg",
    price: 160.0,
    img: './assets/Hills-adult.png',
    stars: 5,
    type: 'Alimentos'
  },
  {
    name: "Hill's Cachorros 7 Kg ",
    price: 85.0,
    img: './assets/Hills-puppy.png',
    stars: 5,
    type: 'Alimentos'
  },
  {
    name: "Hill's Gatos 7 Kg",
    price: 89.99,
    img: './assets/Hills-cat.png',
    stars: 5,
    type: 'Alimentos'
  },
  {
    name: 'Royal Canin Gastrointestinal 10 Kg',
    price: 150.0,
    img: './assets/Royal-canin-dog.png',
    stars: 5,
    type: 'Alimentos'
  },
  {
    name: 'Royal Canin Gatos Gastrointestinal 1,5 Kg',
    price: 45.0,
    img: './assets/Royal-Canin-cat.jpeg',
    stars: 5,
    type: 'Alimentos'
  },
  {
    name: 'Cama Zee Bed (Zee Dog) - Skull',
    price: 120.0,
    img: './assets/Cama-Zee-Bed.png',
    stars: 5,
    type: 'Accesorios'
  },
  {
    name: 'Cama Ibiyaya Zentangle',
    price: 130.0,
    img: './assets/Cama-Ibiyaya-Zentangle.png',
    stars: 4,
    type: 'Accesorios'
  },
  {
    name: 'Transportadora Canguro Ibiyaya',
    price: 159.99,
    img: './assets/Transportadora-Canguro.png',
    stars: 5,
    type: 'Accesorios'
  },
  {
    name: 'Rascador Ibiyaya - Fold Out Cinnamon',
    price: 46.0,
    img: './assets/Rascador-Ibiyaya.png',
    stars: 4,
    type: 'Accesorios'
  },
  {
    name: 'Bolso Transportador Ibiyaya - Hard Rock Transparente',
    price: 130.0,
    img: './assets/Bolsa-Transportadora.png',
    stars: 5,
    type: 'Accesorios'
  },
  {
    name: 'Mordedor Kong Chewstix',
    price: 22.0,
    img: './assets/Mordedor-Kong.png',
    stars: 4,
    type: 'Accesorios'
  },
  {
    name: 'Disco Kong Classic',
    price: 25.0,
    img: './assets/Disco-kong.png',
    stars: 4,
    type: 'Accesorios'
  },
  {
    name: 'Spray Frontline Plus 250Ml - Antipulgas Y Garrapatas',
    price: 25.0,
    img: './assets/Spray-Frontline-plus.png',
    stars: 3,
    type: 'Farmacia'
  },
  {
    name: 'Pipeta Frontline Plus - Perros De 10 A 20 Kg',
    price: 12.0,
    img: './assets/pipeta-frontline-plus.png',
    stars: 4,
    type: 'Farmacia'
  },
  {
    name: 'Shampoo Dominal (Repelente De Pulgas, Piojos Y Garrapatas)',
    price: 100.0,
    img: './assets/Shampoo-Dominal.png',
    stars: 3,
    type: 'Farmacia'
  },
  {
    name: 'Pastilla Nexgard Spectra - Perros De 15 A 30 Kg',
    price: 19.99,
    img: './assets/Pastilla-Nexgard-Spectra.png',
    stars: 4,
    type: 'Farmacia'
  },
  {
    name: 'Pastilla Nexgard - Perros De 10 A 25 Kg',
    price: 16.0,
    img: './assets/Pastilla-Nexgard.png',
    stars: 4,
    type: 'Farmacia'
  }
]

const sectionProducts = document.querySelector('.products')
// Creo un array para los diferentes opciones de productos
const TYPES = []

// Creo la variable que determina si el producto es igual al filtro
let TYPE = []

let STAR = 0

const filter = () => {
  const filtered = []

  for (const product of PRODUCTS) {
    const typeCondition = TYPE.length > 0 ? TYPE.includes(product.type) : true
    const starCondition = STAR ? product.stars >= STAR : true

    if (TYPE.length > 0 && STAR !== undefined) {
      if (typeCondition && starCondition) {
        filtered.push(product)
      }
    } else if (TYPE.length > 0) {
      if (typeCondition) {
        filtered.push(product)
      }
    } else if (STAR !== undefined) {
      if (starCondition) {
        filtered.push(product)
      }
    }
  }

  if (filtered.length > 0) {
    printProducts(filtered)
  } else {
    sectionProducts.innerHTML = ''
    showMessage()
  }
}

const fillTypes = (products) => {
  TYPES.splice(0)

  for (const product of PRODUCTS) {
    if (!TYPES.includes(product.type)) {
      TYPES.push(product.type)
    }
  }
}

const createHeader = () => {
  const header = document.createElement('header')

  //Creo la seccion del header
  const sectionHeader = document.createElement('section')
  const logo = document.createElement('img')
  const menu = document.createElement('img')
  const input = document.createElement('input')
  const user = document.createElement('img')
  const carrito = document.createElement('img')

  //Creo el nav del header
  const nav = document.createElement('nav')
  const list = document.createElement('ul')
  const lista = [
    'Perros',
    'Gatos',
    'Marcas',
    'Accesorios',
    'Promos',
    'Sobre Pet Market'
  ]
  for (const elemento of lista) {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.textContent = elemento
    link.href = '#'
    link.target = '_blank'
    item.append(link)
    list.append(item)
  }

  // Le doy contenido a los elementos de la seccion
  header.classList = 'flex-container'
  sectionHeader.classList = 'flex-container encabezado'
  logo.classList = 'logo'
  logo.src = './assets/LOGO TPM.PNG'
  menu.classList = 'menu'
  menu.src = './assets/menu (1).png'
  input.classList = 'search'
  input.placeholder = 'Que estas buscando?'
  user.classList = 'user'
  user.src = './assets/usuario.png'
  carrito.classList = 'carrito'
  carrito.src = './assets/carretilla.png'

  // Le doy contenido a los elementos del nav
  nav.classList = 'nav flex-container'
  list.classList = 'flex-container'

  //Agrego todo a la seccion del header
  document.body.insertBefore(header, document.body.firstChild)
  header.append(sectionHeader)
  sectionHeader.append(logo)
  sectionHeader.append(menu)
  sectionHeader.append(input)
  sectionHeader.append(user)
  sectionHeader.append(carrito)

  // Agrego en nav al header
  nav.append(list)
  header.append(nav)
}
createHeader()

const createSelectTypes = () => {
  //Creo la seccion donde voy a poner el select
  const sectionFilters = document.createElement('section')
  const selectType = document.createElement('select')
  const header = document.querySelector('header')
  const optionPlaceholder = document.createElement('option')

  selectType.id = 'types'
  sectionFilters.classList = 'filters flex-container'
  optionPlaceholder.textContent = 'Seleccione un tipo de producto'
  optionPlaceholder.value = ''
  optionPlaceholder.hidden = true

  selectType.append(optionPlaceholder)

  //recorro el array con los diferentes tipos de productos que hay
  //Y genero las diferentes opciones para filtrar
  for (const type of TYPES) {
    const option = document.createElement('option')

    option.value = type
    option.textContent = type

    selectType.append(option)
  }

  header.insertAdjacentElement('afterend', sectionFilters)
  sectionFilters.append(selectType)

  //Genero el evento y filtro
  selectType.addEventListener('change', (event) => {
    TYPE = event.target.value
    filter()
  })
}

const createSelectStars = () => {
  //Creo el select de estrellas
  const sectionFilters = document.querySelector('.filters')
  const selectStar = document.createElement('select')
  const optionPlaceholder = document.createElement('option')

  selectStar.id = 'stars'
  optionPlaceholder.textContent = 'Seleccione cantidad de estrellas'
  optionPlaceholder.value = ''
  optionPlaceholder.hidden = true

  selectStar.append(optionPlaceholder)

  //Genero las diferentes opciones para filtrar
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement('option')

    option.value = i
    option.textContent = i + ' estrellas'
    selectStar.append(option)
  }

  sectionFilters.append(selectStar)

  //Genero el evento y filtro
  selectStar.addEventListener('change', (event) => {
    STAR = event.target.value
    filter()
  })
  createButton()
}

const createButton = () => {
  const button = document.createElement('button')
  const sectionFilters = document.querySelector('.filters')
  const sectionProducts = document.querySelector('.products')

  button.classList = 'button'
  button.textContent = 'Limpiar filtros'

  sectionFilters.append(button)

  button.addEventListener('click', () => {
    sectionProducts.innerHTML = ''
    TYPE = ''
    STAR = 0
    sectionFilters.remove()
    createSelectTypes()
    createSelectStars()
    printProducts(PRODUCTS)
  })
}

const showMessage = () => {
  const divMessage = document.createElement('div')
  const p = document.createElement('p')
  const divSuggestions = document.createElement('div')
  const h3 = document.createElement('h3')

  divMessage.classList = 'message flex-container'
  p.textContent = 'No se encontraron productos para los filtros seleccionados'
  divSuggestions.classList = 'suggestions flex-container'
  h3.textContent = 'Productos sugeridos'

  divMessage.append(p)
  divSuggestions.append(h3)
  sectionProducts.append(divMessage)
  sectionProducts.append(divSuggestions)

  suggestions()
}

const suggestions = () => {
  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const randomProducts = getRandomProducts(PRODUCTS, 4)
  const suggestionsContainer = document.querySelector('.suggestions')

  randomProducts.forEach((product) => {
    const articleProduct = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const divBuy = document.createElement('div')
    const price = document.createElement('p')
    const button = document.createElement('button')
    const divStars = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      if (i <= product.stars) {
        star.classList.add('rellena')
      }
      divStars.appendChild(star)
    }

    articleProduct.className = 'flex-container '
    divImg.classList = 'imgContainer'
    divStars.classList.add('flex-container', 'stars')
    img.src = product.img
    name.textContent = product.name
    divBuy.classList = 'buy flex-container'
    button.textContent = 'Comprar'
    price.textContent = `${product.price} €`

    articleProduct.appendChild(divImg)
    divImg.appendChild(img)
    articleProduct.appendChild(name)
    articleProduct.append(divBuy)
    divBuy.appendChild(price)
    divBuy.appendChild(button)
    articleProduct.appendChild(divStars)

    suggestionsContainer.appendChild(articleProduct)
  })
}

const printProducts = (products) => {
  const sectionProducts = document.querySelector('.products')
  sectionProducts.innerHTML = ''

  for (const product of products) {
    const articleProduct = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const divBuy = document.createElement('div')
    const price = document.createElement('p')
    const button = document.createElement('button')
    const divStars = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      if (i <= product.stars) {
        star.classList.add('rellena')
      }
      divStars.appendChild(star)
    }
    articleProduct.className = 'flex-container'
    divImg.classList = 'imgContainer'
    divStars.classList.add('flex-container', 'stars')
    img.src = product.img
    name.textContent = product.name
    divBuy.classList = 'buy flex-container'
    button.textContent = 'Comprar'
    price.textContent = `${product.price} €`

    articleProduct.appendChild(divImg)
    divImg.appendChild(img)
    articleProduct.appendChild(name)
    articleProduct.append(divBuy)
    divBuy.appendChild(price)
    divBuy.appendChild(button)
    articleProduct.appendChild(divStars)
    sectionProducts.appendChild(articleProduct)
  }
}
fillTypes(PRODUCTS)
printProducts(PRODUCTS)
createSelectTypes()
createSelectStars()
