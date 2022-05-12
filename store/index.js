export const state = () => ({
  pixiApp: null,
})

export const mutations = {
  setPixiApp(state, app) {
    state.pixiApp = app
  },
}
