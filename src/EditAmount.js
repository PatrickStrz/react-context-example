import React from 'react'
import { BillPaymentContext } from './BillPayment.context'

export const EditAmount = () => (
    <BillPaymentContext.Consumer>
        {({ state, actions }) => (
            <input
                value={state.amount}
                type="text"
                onChange={e => actions.setAmount(e.target.value)}
            />
        )}
    </BillPaymentContext.Consumer>
)
