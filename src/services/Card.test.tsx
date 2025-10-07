import { chamarBoasVindas } from "./Texto";

describe('chamarBoasVindas', () => {
    it('deve exibir mensagem de boas vindas', () => {
        // Arrange
        global.alert = jest.fn();

        // Act
        chamarBoasVindas()

        // Assert
        expect(global.alert).toHaveBeenCalledWith("Bem-vindo ao sistema!")
    })
})