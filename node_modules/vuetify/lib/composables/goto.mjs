// Utilities
import { inject } from 'vue';
import { mergeDeep, refElement } from "../util/index.mjs"; // Types
export const GoToSymbol = Symbol.for('vuetify:goto');
function genDefaults() {
  return {
    container: undefined,
    duration: 300,
    layout: false,
    offset: 0,
    easing: 'easeInOutCubic',
    patterns: {
      linear: t => t,
      easeInQuad: t => t ** 2,
      easeOutQuad: t => t * (2 - t),
      easeInOutQuad: t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t,
      easeInCubic: t => t ** 3,
      easeOutCubic: t => --t ** 3 + 1,
      easeInOutCubic: t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      easeInQuart: t => t ** 4,
      easeOutQuart: t => 1 - --t ** 4,
      easeInOutQuart: t => t < 0.5 ? 8 * t ** 4 : 1 - 8 * --t ** 4,
      easeInQuint: t => t ** 5,
      easeOutQuint: t => 1 + --t ** 5,
      easeInOutQuint: t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5
    }
  };
}
function getContainer(el) {
  return getTarget(el) ?? (document.scrollingElement || document.body);
}
function getTarget(el) {
  return typeof el === 'string' ? document.querySelector(el) : refElement(el);
}
function getOffset(target, horizontal, rtl) {
  if (typeof target === 'number') return horizontal && rtl ? -target : target;
  let el = getTarget(target);
  let totalOffset = 0;
  while (el) {
    totalOffset += horizontal ? el.offsetLeft : el.offsetTop;
    el = el.offsetParent;
  }
  return totalOffset;
}
export function createGoTo(options, locale) {
  return {
    rtl: locale.isRtl,
    options: mergeDeep(genDefaults(), options)
  };
}
async function scrollTo(_target, _options, horizontal, goTo) {
  const options = mergeDeep(goTo?.options, _options);
  const rtl = goTo?.rtl.value;
  const target = (typeof _target === 'number' ? _target : getTarget(_target)) ?? 0;
  const container = options.container === 'parent' && target instanceof HTMLElement ? target.parentElement : getContainer(options.container);
  const ease = typeof options.easing === 'function' ? options.easing : options.patterns[options.easing];
  if (!ease) throw new TypeError(`Easing function "${options.easing}" not found.`);
  let targetLocation;
  if (typeof target === 'number') {
    targetLocation = getOffset(target, horizontal, rtl);
  } else {
    targetLocation = getOffset(target, horizontal, rtl) - getOffset(container, horizontal, rtl);
    if (options.layout) {
      const styles = window.getComputedStyle(target);
      const layoutOffset = styles.getPropertyValue('--v-layout-top');
      if (layoutOffset) targetLocation -= parseInt(layoutOffset, 10);
    }
  }
  targetLocation += options.offset;
  const startLocation = (horizontal ? container.scrollLeft : container.scrollTop) ?? 0;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const startTime = performance.now();
  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(options.duration ? Math.min(timeElapsed / options.duration, 1) : 1);
    const location = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    container[horizontal ? 'scrollLeft' : 'scrollTop'] = location;
    if (progress === 1) return resolve(targetLocation);
    let clientSize;
    let reachEnd;
    if (!horizontal) {
      clientSize = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
      reachEnd = clientSize + container.scrollTop >= container.scrollHeight;
      if (targetLocation > container.scrollTop && reachEnd) return resolve(targetLocation);
    } else {
      clientSize = container === document.body ? document.documentElement.clientWidth : container.clientWidth;
      reachEnd = clientSize + container.scrollLeft >= container.scrollWidth;
      if (targetLocation > container.scrollLeft && reachEnd) return resolve(targetLocation);
    }
    requestAnimationFrame(step);
  }));
}
export function useGoTo() {
  let _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const goTo = inject(GoToSymbol);
  if (!goTo) throw new Error('[Vuetify] Could not find injected goto instance');
  async function go(target, options) {
    return scrollTo(target, mergeDeep(_options, options), false, goTo);
  }
  go.horizontal = async (target, options) => {
    return scrollTo(target, mergeDeep(_options, options), true, goTo);
  };
  return go;
}
//# sourceMappingURL=goto.mjs.map