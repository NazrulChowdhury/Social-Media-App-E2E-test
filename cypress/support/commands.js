Cypress.Commands.add('login',(email,password)=>{
    cy.get('a[href*="login"]').contains('Login').click()
    cy.url().should('include','/login')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('button[type = submit]').click()
    //cy.get('.profile-details').should('be.visible')
})
Cypress.Commands.add('quickLogin',(user)=>{
    cy.request({
        url: Cypress.env('api'),
        method: 'post',
        body: {email: user.email, password: user.password}
    }).then(res =>{
        localStorage.setItem("FBIdToken",res.body.token) 
        cy.visit('/')
        cy.get('.profile-details').should('be.visible')
    })
})
