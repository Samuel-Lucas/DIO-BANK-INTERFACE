import { createLocalStorage, getAllLocalStorage } from "../Storage"

const diobank = {
    login: false
}

describe('storage', () => {

    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})