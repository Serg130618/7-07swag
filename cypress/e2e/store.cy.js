describe("user store api", () => {
it('API test', ()=> {

    cy.request({
        method: "POST",
        url: "/store/order",
        body: {
            complete:  false,
            id: 1,
            petId: 1,
            quantity: 0
        }
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).be.eq(200);
        expect(response.body).be.eqls({
            complete:  false,
            id: 1,
            petId: 1,
            quantity: 0
      })
     
    cy.request( `/store/order/${response.body.id}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).be.eqls({
            complete:  false,
            id: 1,
            petId: 1,
            quantity: 0
      })

    })
    cy.request("DELETE", `/store/order/${response.body.id}`).then((response) => {
        expect(response.status).to.eq(200)
    })
})
})
})