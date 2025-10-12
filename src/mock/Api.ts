const conta = {
    email: 'samuel@gmail.com',
    password: '123456',
    name: 'Samuel Lucas',
    balance: 1000
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})