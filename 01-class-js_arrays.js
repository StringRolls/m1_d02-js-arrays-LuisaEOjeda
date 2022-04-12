// Class code examples

  // Declaration
  const drinks = ['Agua', 'Coca-cola', 'Aquarius', 'Fanta', 'Cacaolat', 'Jagger', 'Red Bull', 'Cervemocho']
  console.log('Initial array:', drinks)

  // Access
  console.log('First drink is ', drinks[0])
  console.log('Second drink is ', drinks[1])

  // Update
  drinks[1] = 'Pepsi'
  console.log('Now the second drink is ', drinks[1])

  // Length
  console.log(`We have ${drinks.length} drinks in total`)

  // Adding values (last) ---- imperative
  drinks[drinks.length] = 'Choco Bailyes'
  console.log('The array has been extended: ', drinks)

  // Adding values (last) ---- declarative
  drinks.push('Nestea', 'Monster')
  console.log('...extended even more:', drinks)

  // Adding values (first)
  drinks.unshift('Zumo')
  console.log('Now the drinks are: ', drinks)

  // Removing values (last)
  drinks.pop()
  console.log('Now the drinks are: ', drinks)

  // Removing values (several)
  drinks.splice(1, 3)         // from index one, remove 3 items
  console.log('Now the drinks are: ', drinks)


  // Split text into array
  const string = 'Lorem ipsum dolor sit amet'
  const words = string.split(' ')
  console.log('Here is each word in the string:', words)


  const drinks = ['Coca-cola', 'Agua', 'Fanta', 'Kas', 'Nestea', 'Red Bull', 'Cacaolat']

  // for (let i = 0; i < drinks.length; i++) {
  //     console.log(drinks[i])
  // }

  drinks.forEach(showEachDrink)

  function showEachDrink(popino) {
      console.log(popino)
  }