const fileNameToComponentName = filename =>
  filename
    // remove './' from the begining
    .replace(/^\.\//, '')
    // remove extension
    .replace(/\.\w+$/, '')
    // remove dangling filename if exists
    .replace(/\/\w+$/, '')

const registerComponents = (Vue, requireContext) => {
  requireContext.keys().forEach(filename => {
    const componentConfig = requireContext(filename)
    const componentName = fileNameToComponentName(filename)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

export default function register(Vue) {
  registerComponents(Vue, require.context('@/components/global/', false, /Base.*vue$/))
  registerComponents(Vue, require.context('@/components/global/', true, /Base.*\/index.vue$/))
}
