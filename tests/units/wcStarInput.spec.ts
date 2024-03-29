import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import StarInput from "../../src/wcStarInput";

// Mock the replaceSync() method
global.CSSStyleSheet.prototype.replaceSync = jest.fn();

describe("wcStarInput.js", () => {
  window.customElements.define("star-input", StarInput);

  test("custom elements in JSDOM", () => {
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
    const customElement = document.getElementById("star-input");
    expect(customElement).not.toBeNull();
    expect(customElement!.shadowRoot).not.toBeNull();
    const radioArr =
      customElement!.shadowRoot!.querySelectorAll("input[type=radio]");
    expect(radioArr.length).toBe(10);
  });

  test("test not specify width and height", () => {
    document.body.innerHTML = `
      <h1>Custom element test</h1>
      <star-input
        id="star-input"
        name="stars"
        data-halfstar="true"
      >
      </star-input>
    `;

    const customElement = document.getElementById("star-input");
    if (customElement !== null) {
      expect(customElement!.shadowRoot).not.toBeNull();
      const styleElement = customElement.shadowRoot!.querySelector("style");
      if (styleElement !== null) {
        expect(styleElement.textContent).not.toBeNull();
        expect(
          styleElement.textContent!.startsWith(
            ":host{--star-width: 50px;--star-height: 50px;}",
          ),
        ).toBeTruthy();
      } else {
        fail("No style rendered");
      }
    } else {
      fail("star input component not rendered");
    }
  });

  test("test not allow half star", () => {
    document.body.innerHTML = `
      <h1>Custom element test</h1>
      <star-input
        id="star-input"
        name="stars"
        data-halfstar="false"
      >
      </star-input>
    `;

    const customElement = document.getElementById("star-input");
    if (customElement !== null) {
      expect(customElement!.shadowRoot).not.toBeNull();
      const halfLabels = customElement.shadowRoot!.querySelectorAll(".half");
      if (halfLabels.length > 0) {
        halfLabels.forEach((element) => {
          expect(element).not.toHaveClass("allow-half");
        });
      } else {
        fail("Labels not rendered");
      }
    } else {
      fail("star input component not rendered");
    }
  });

  test("test allow half star", () => {
    document.body.innerHTML = `
      <h1>Custom element test</h1>
      <star-input
        id="star-input"
        name="stars"
        data-halfstar="true"
      >
      </star-input>
    `;

    const customElement = document.getElementById("star-input");
    if (customElement !== null) {
      expect(customElement!.shadowRoot).not.toBeNull();
      const halfLabels = customElement.shadowRoot!.querySelectorAll(".half");
      if (halfLabels.length > 0) {
        halfLabels.forEach((element) => {
          expect(element).toHaveClass("allow-half");
        });
      } else {
        fail("Labels not rendered");
      }
    } else {
      fail("star input component not rendered");
    }
  });

  test("test change event", async () => {
    const customElement = document.getElementById("star-input");
    if (customElement !== null) {
      expect(customElement!.shadowRoot).not.toBeNull();
      const firstRadio = customElement.shadowRoot!.querySelector(
        'input[type=radio][name="starRate"]',
      );
      if (firstRadio !== null) {
        await fireEvent.click(firstRadio);
        const checkedStar = customElement.shadowRoot!.querySelector(
          'input[type=radio][name="starRate"]:checked',
        );
        expect(checkedStar).not.toBeNull();
        expect((checkedStar as HTMLInputElement).value).toBe("5");
      } else {
        fail("No radio element rendered");
      }
    }
  });
});
