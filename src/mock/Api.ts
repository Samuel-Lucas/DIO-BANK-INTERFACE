const conta = {
    email: 'samuel@gmail.com',
    password: '123456',
    name: 'Samuel Lucas'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})