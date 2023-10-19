import {createElement} from 'lwc';
import HellowWorld from 'c/hellowWorld';

describe('c-hellow-world', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Display Greeting', () => {
        // Arrange
        const element = createElement('c-hellow-world', {
            is: HellowWorld
        });

        // Act
        document.body.appendChild(element);

        // Assert
         const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toBe('Hello,World');
    });

    it('Render with Hello Matt',() =>{
        const element = createElement('c-hellow-world',{
            is:HellowWorld
        });
        element.person="Matt"
        document.body.appendChild(element);
        const pTag = element.shadowRoot.querySelector('p');
        expect(pTag.textContent).toBe('Hello,Matt');
    });
});