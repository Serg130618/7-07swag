describe("user store api", () => {
  it("should create, put and delete user", () => {
    //const user = {username: "test"};
      cy.request({method: 'POST', url: "/user/createWithList", body :[{ 
        id: 1,
        username: "S"}]
      }).then((response) => {
      
      //cy.log(JSON.stringify(response.body));
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls( {
        id: 1,
        username: "S" });
      

// const user2 = {
//   username: "test2"};
//     cy.request("PUT", "/user/2" )
//       .then((response) => {
//       //cy.log(JSON.stringify(response.body));
//       expect(response.status).be.eq(200);
//       expect(response.body.name).be.eq()

//   });
  
  //   cy.request("DELETE", "/user/user1").then((response) => {
  //     expect(response.status).be.eq(200)
  //   });
});
});
})