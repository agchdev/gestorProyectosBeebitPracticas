describe('Pruebas del Frontend', () => {
    it('Carga correctamente la página principal', () => {
      cy.visit('http://localhost:3000'); // Carga el frontend
      cy.contains('Usuarios'); // Asegura que aparece el texto "Usuarios"
    });
  
    it('Debe mostrar la lista de usuarios', () => {
      cy.visit('http://localhost:3000');
      
      cy.get('[data-cy=user-list]') // Selecciona la lista de usuarios
        .should('be.visible'); // Asegura que está visible
    });
  
    it('Debe mostrar un usuario específico', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-cy=user-item]') // Selecciona un usuario de la lista
        .first() // Toma el primer usuario
        .should('contain.text', 'Alejandro'); // Verifica que el nombre aparece
    });
  });
  