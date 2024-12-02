import { FilterAction, FilterActions } from './action'
import { Filter } from './schema'
import { atomWithReducer } from 'jotai/utils'

const defaultFilterState: Filter = {
    title: '',
    price_min: 0,
    price_max: 100,
    categoryId: 1,
}

const FilterReducer = (prev: Filter, action: FilterAction) => {
    switch (action.event) {
        case FilterActions.setCategoryId:
            return {
                ...prev,
                categoryId: action.data,
            }

        case FilterActions.setMaximumAmount:
            return {
                ...prev,
                price_max: action.data,
            }

        case FilterActions.setMinimumAmount:
            return {
                ...prev,
                price_min: action.data,
            }

        case FilterActions.setSearchInput:
            return {
                ...prev,
                title: action.data,
            }

        default:
            return prev
    }
}

export const filterReducerAtom = atomWithReducer(
    defaultFilterState,
    FilterReducer
)
