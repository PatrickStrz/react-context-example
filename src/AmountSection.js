import React from 'react'
import { BillPaymentContext } from './BillPayment.context'

export const AmountSection = () => (
    <BillPaymentContext.Consumer>
        {value => <p>{value.state.amount}</p>}
    </BillPaymentContext.Consumer>
)
