import {BUG_ADDED} from './ActionTypes'

export const addBug = description => ({
    
        type:BUG_ADDED,
        payload:{
          description:description
        }
      
})