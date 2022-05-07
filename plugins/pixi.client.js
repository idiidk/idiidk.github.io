import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'
import * as PIXI from 'pixi.js'

export default (_, inject) => {
  PIXI.filters.KawaseBlurFilter = KawaseBlurFilter
  inject('PIXI', PIXI)
}
