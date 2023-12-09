describe("user store api", () => {
    it("should create, put and delete user", () => {
        const user = {
            name: "John"
              };
        cy.request({method: 'POST', url: "https://petstore.swagger.io/v2/user", body : user,
        }).then((response) => {
            
        //cy.log(JSON.stringify(response.body));
        expect(response.status).be.eql(200);
        expect(response.body.name).be.equal(user.name)
        
  });
  //userId = response.body.id
});
})