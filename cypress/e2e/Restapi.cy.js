describe('HTTPS example', function () {

  it('GET', function () {

    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/',
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });

  });
});
