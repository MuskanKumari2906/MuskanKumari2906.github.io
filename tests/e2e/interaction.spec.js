describe('Interaction Tests', () => {
    before(() => {
        cy.visit('/'); // Visit the main entry point of the VR experience
    });

    it('should display the bedroom scene', () => {
        cy.get('a-scene').should('exist'); // Check if the A-Frame scene is present
    });

    it('should interact with the bed', () => {
        cy.get('a-entity[geometry="primitive: box;"]') // Assuming the bed is represented as a box
            .trigger('mouseenter') // Simulate gaze interaction
            .click(); // Simulate click interaction
        cy.get('.info-card') // Assuming there's an info card that appears
            .should('be.visible') // Check if the info card is visible
            .contains('Bed'); // Check if it contains the correct information
    });

    it('should play narration when interacting with the lamp', () => {
        cy.get('a-entity[geometry="primitive: cylinder;"]') // Assuming the lamp is represented as a cylinder
            .trigger('mouseenter')
            .click();
        cy.get('audio') // Check if the audio element is present
            .should('have.prop', 'paused', false); // Ensure the audio is playing
    });

    it('should navigate using the HUD', () => {
        cy.get('#hud-button') // Assuming there's a button in the HUD
            .click(); // Simulate button click
        cy.url().should('include', '/another-scene.html'); // Check if it navigates to another scene
    });
});