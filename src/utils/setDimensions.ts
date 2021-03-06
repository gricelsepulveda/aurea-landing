import { GeneralTypes } from "../types/types"

export const setDimensions = (
    w:GeneralTypes['dimensions'], 
    h:GeneralTypes['dimensions'], 
  ) => {
    return {
      width: `${w.size}${w.unit != '-' ? w.unit : ''}`,
      height: `${h.size}${h.unit != '-' ? h.unit : ''}`
    }
}