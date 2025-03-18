/* TESTEAR LA FUNCIONALIDAD DE LOS USUARIOS */

describe("Gestión de usuarios", () => {
    it("Añadir un usuario y verificar que aparece en la lista", () => {
        cy.request("POST", "http://localhost:3001/users", {
            name: "Usuario de Prueba",
            role: "user",
        }).then(() => {
            cy.visit("/"); // regarga la página
            cy.contains("Usuario de Prueba").should("exist");
        })
    })
})