const jsFundamentals = () => {
  /**
   * Afterclass 01 - JS Fundamentals
   */
  /**
   * Varbiables types
   */

  // var variableName = 'Juan'

  // const name = 'Pedro'
  // const surname = 'Perez'

  // let age = 30
  // age = 31

  // const user = {
  //   name: 'Juan',
  //   surname: 'Perez',
  //   age: 40
  // }

  // user.name = 'Mateo'

  // const array = [1, 2, 3, 4, 5]

  // array.push(6)

  // const array2 = [...array, 7, 8, 9]

  // console.log({ array, array2 })

  /**
   * Template Strings
   */

  // const name = 'Pedro'
  // const surname = 'Perez'
  // const age = 28

  // console.log(name + ' ' + surname + ' ' + age + ' años')
  // console.log(`${name} ${surname} ${age} años`)

  /**
   * Literal Objects
   */

  // const owner = {
  //   name: 'Pedro',
  //   surname: 'Perez',
  //   age: 28
  // }

  // const dog = {
  //   name: 'Perro',
  //   age: 5,
  //   owner
  // }

  /**
   * Arrays
   */

  // const arrayNumber = [1, 2, 3, 4, 5]
  // arrayNumber.push(6)
  // arrayNumber.push(7)
  // arrayNumber.push(8)
  // arrayNumber.push(9)

  // let arrayNumber2 = [...arrayNumber, 10, 11, 12]

  // arrayNumber2 = [...arrayNumber2, 13, 14, 15]

  // console.log({ arrayNumber, arrayNumber2 })

  /**
   * Functions
   */

  // const name = (nameUser = 'Juan') => `Hola ${nameUser}`

  // const name2 = nameUser => {
  //   console.log({ nameUser })
  //   return name()
  // }

  // console.log(name2('Armando'))

  /**
   * Objects destructuring
   */

  const nameOwner = 'Pedro'
  const surnameOwner = 'Perez'
  const ageOwner = 28

  const dog = {
    name: 'Perro',
    age: 5,
    owner: {
      nameOwner,
      surnameOwner,
      ageOwner
    }
  }

  const context = ({ name, age, owner }) => ({
    name,
    age,
    owner
  })

  const { name, age, owner } = context(dog)
  console.log(`
  Hola, me llamo ${name}, y tengo ${age} años.
  Mi amo se llama ${owner.nameOwner} y tiene ${owner.ageOwner} años.
  `)

  dog.name = 'Goliath'

  console.log(`
  Hola, me llamo ${name}, y tengo ${age} años.
  Mi amo se llama ${owner.nameOwner} y tiene ${owner.ageOwner} años.
  `)

  const arraysDestructuring = () => {
    const ageArray = 25
    const nameArray = 'Pedro'

    return [ageArray, nameArray]
  }

  const [ageArray, nameArray] = arraysDestructuring()
  console.log([ageArray, nameArray])

  let number

  for (let index = 0; index < 20; index++) {
    number = index
    console.log(number)
  }
}

export default jsFundamentals
