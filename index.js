const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const length = Number(prompt('Введіть кількість символів пароля від 1 до 36: '))

function generateKey (length, characters) {
    let passwordUser = ''
    const charactersArray = characters.split('')
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordUser += charactersArray[randomIndex]
    }
    return passwordUser
}

const key = generateKey(length, characters)
console.log(key)
