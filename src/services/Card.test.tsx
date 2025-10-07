import { chamarBoasVindas } from "./Texto";

describe('chamarBoasVindas', () => {
    it('deve exibir mensagem de boas vindas', () => {
        global.alert = jest.fn();
        const value = chamarBoasVindas()
        expect(global.alert).toHaveBeenCalledWith("Bem-vindo ao sistema!")
    })
})