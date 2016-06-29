/**
 * @typedef {Object} IntersectionObserverOptions
 * @property {string} querySelector - Valid selector for querySelectorAll.
 * @property {Array} threshold - Threshold(s) at which to trigger callback, specified as a ratio, or list of ratios.
 * @property {string} rootMargin - Same as margin, can be 1, 2, 3 or 4 components, possibly negative lengths.
 */

/**
 * IntersectionObserver wrapper for convenient.
 */
class IntersectionObserverWrapper {

  /**
   * @param {function} callback - Callback function called whenever one target, intersects either the device viewport.
   * @param {IntersectionObserverOptions} options - All the needed options for IntersectionObserver.
   * @constructor
   */
  constructor(callback, options) {
    const observableElements = Array.prototype.slice.call(document.querySelectorAll(options.querySelector));

    this._observer = new IntersectionObserver(callback, {
      threshold: options.threshold || [0],
      rootMargin: options.rootMargin || '-50px 0px'
    });

    observableElements.forEach((observableElement) => this._observer.observe(observableElement));
  }
}

export default IntersectionObserverWrapper;