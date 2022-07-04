import '@testing-library/jest-dom';
import StarInput from '../../src/wcStarInput';

describe('wcStarInput.js', () => {

  test('custom elements in JSDOM', () => {
    window.customElements.define('star-input', StarInput);
    document.body.innerHTML = `
      <h1>Custom element test</h1>
      <star-input
        id="star-input"
        name="stars"
        height="30"
        width="30"
        data-halfstar="true"
      >
      </star-input>
    `;
    const customElement = document.getElementById('star-input');
    expect(customElement === null).toBeFalsy();
    const radioArr = customElement.shadowRoot.querySelectorAll('input[type=radio]')
    expect(radioArr.length).toBe(10);
  })
  
});