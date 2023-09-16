import * as UserActions from './user/user.action'
import * as CartActions from './cart/cart.slice'

export const allActions = {
    ...UserActions,
    ...CartActions
}