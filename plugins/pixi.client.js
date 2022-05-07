import { Application, Graphics, filters } from 'pixi.js'
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'

export default (_, inject) => {
  filters.KawaseBlurFilter = KawaseBlurFilter

  inject('PIXI', {
    Application,
    Graphics,
    filters,
  })
}
