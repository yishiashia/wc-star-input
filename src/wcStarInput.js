import '@webcomponents/webcomponentsjs/webcomponents-bundle'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
import '@webcomponents/custom-elements/custom-elements.min.js'
import starStyle from './stars.scss'

function getPixel (val) {
  const pixelVal = parseInt(val)
  if (!isNaN(pixelVal) && pixelVal > 0) {
    return pixelVal
  } else {
    return 50
  }
}
export default class StarInput extends HTMLElement {
  constructor () {
    super()

    // Shadow dom
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = this.template()

    this.realInput = null
    this.value_ = '0'
    this.allowHalf = false
  }

  connectedCallback () {
    const _self = this
    _self.allowHalf = _self.attributes['data-halfstar'].value === 'true'
    const halfLabels = _self.shadowRoot.querySelectorAll('.half')
    halfLabels.forEach(element => {
      if (_self.allowHalf) {
        element.classList.add('allow-half')
      } else {
        element.classList.remove('allow-half')
      }
    })

    this.realInput = document.createElement('input')
    this.realInput.type = 'hidden'
    this.realInput.name = this.attributes.name?.value
    this.realInput.value = this.value_
    this.appendChild(this.realInput)

    // Style
    const styleElement = document.createElement('style')
    styleElement.appendChild(document.createTextNode(`:host{--star-width: ${getPixel(_self.attributes.width.value)}px;--star-height: ${getPixel(_self.attributes.height.value)}px;}`))
    styleElement.appendChild(document.createTextNode(starStyle))
    this.shadowRoot.appendChild(styleElement)

    this.valueChange = this.valueChange.bind(this)
    const radios = _self.shadowRoot.querySelectorAll('input[type=radio][name="starRate"]')
    radios.forEach(element => {
      element.addEventListener('change', _self.valueChange)
    })
  }

  disconnectedCallback () {
    const _self = this
    const radios = _self.shadowRoot.querySelectorAll('input[type=radio][name="starRate"]')
    radios.forEach(element => {
      element.removeEventListener('change', _self.valueChange)
    })
  }

  valueChange () {
    this.value_ = this.shadowRoot.querySelector('input[type=radio][name="starRate"]:checked').value
    if (this.realInput) {
      this.realInput.value = this.value_
    }
  }

  template () {
    return `
      <div class="rate">
        <input type="radio" name="starRate" id="rating10" name="rating" value="5" />
        <label for="rating10" title="5 stars"></label>
        <input type="radio" name="starRate" id="rating9" name="rating" value="4.5" />
        <label class="half" for="rating9" title="4.5 stars"></label>
        <input type="radio" name="starRate" id="rating8" name="rating" value="4" />
        <label for="rating8" title="4 stars"></label>
        <input type="radio" name="starRate" id="rating7" name="rating" value="3.5" />
        <label class="half" for="rating7" title="3.5 stars"></label>
        <input type="radio" name="starRate" id="rating6" name="rating" value="3" />
        <label for="rating6" title="3 stars"></label>
        <input type="radio" name="starRate" id="rating5" name="rating" value="2.5" />
        <label class="half" for="rating5" title="2.5 stars"></label>
        <input type="radio" name="starRate" id="rating4" name="rating" value="2" />
        <label for="rating4" title="2 stars"></label>
        <input type="radio" name="starRate" id="rating3" name="rating" value="1.5" />
        <label class="half" for="rating3" title="1.5 stars"></label>
        <input type="radio" name="starRate" id="rating2" name="rating" value="1" />
        <label for="rating2" title="1 star"></label>
        <input type="radio" name="starRate" id="rating1" name="rating" value="0.5" />
        <label class="half" for="rating1" title="0.5 star"></label>
      </div>
    `
  }
}
