/**
* Lager og returnerer et HTML-element.
* Legger til attributes hvis de er oppgitt.
*
* @param {string} tag tagnavnet, f.eks. 'select', 'p' eller 'div'.
* @param {object} [attributes] et objekt som inneholder attributter som skal
*                              legges til på elementet, f.eks. id: 'myID'.
* @returns {HTMLElement} et HTML-element
*/
function create(tag, attributes) {
  var element = document.createElement(tag);

  if (typeof attributes === 'object') {
    for (var key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element[key] = attributes[key];
      }
    }
  }

  return element;
}

/**
 * Funksjonen lager et select-element med valgalternativer
 * fra parameteret, og returnerer select-elementet.
 *
 * @param {object[]} options valgalternativer
 */
function createSelector(options) {
  var selector = create('select');

  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    var optionElement = create('option', {
      value: option.id
    });

    optionElement.innerHTML = option.name;

    selector.appendChild(optionElement);
  }

  return selector;
}
