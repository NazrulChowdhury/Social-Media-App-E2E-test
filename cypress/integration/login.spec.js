import user from "../fixtures/userInfo.json"

describe('log in tests', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('eq','Social Media')
    })
    afterEach(()=>{
        cy.clearLocalStorage()
    })
    it('login attempt fails with wrong email',()=>{
        cy.login(user.wrongEmail, user.password)
        cy.contains('Wrong credentials, please try again')
        cy.url().should('contain','/login')
    })
    it('login attempt fails with wrong password',()=>{
        cy.login(user.email, user.wrongPassword)
        cy.contains('Wrong credentials, please try again')
        cy.url().should('contain','/login')
    })    
    it('successfully log in with correct credential',()=>{
        cy.login(user.email, user.password)
    })
    it('login via api bypassing UI',()=>{
        cy.quickLogin(user)
    })
})