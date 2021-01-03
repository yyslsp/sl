import {
  UPDATE_FOOT,
  UPDATE_NAV,
  UPDATE_LOADING
} from './types.js'
let mutations = {
  [UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,
  [UPDATE_NAV]:(state,payload)=>state.bNav=payload,
  [UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
};

export default mutations;