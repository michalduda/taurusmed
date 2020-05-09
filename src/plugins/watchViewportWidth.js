import Vue from 'vue'

const screenObservable = Vue.observable(
  {
    mode: 'mobile',
    availableMods: {
      MOBILE: 'mobile',
      TABLET: 'tablet',
      DESKTOP: 'desktop'
    },
    width: 0
  }
)

const { availableMods } = screenObservable

const resizeListener = () => {
  const width = window.innerWidth
  screenObservable.width = width

  if (width >= 992) {
    screenObservable.mode = availableMods.DESKTOP
  } else if (width >= 576) {
    screenObservable.mode = availableMods.TABLET
  } else {
    screenObservable.mode = availableMods.MOBILE
  }
}

export default {
  install (Vue, options) {
    resizeListener()
    window.addEventListener('resize', resizeListener)

    Vue.prototype.$screen = screenObservable
  }
}
