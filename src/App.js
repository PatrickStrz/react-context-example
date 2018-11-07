import React, { Component } from 'react'

import { BillPaymentProvider } from './BillPayment.context'
import { AmountSection } from './AmountSection'
import { EditAmount } from './EditAmount'

class App extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1>Context Demo</h1>
                <BillPaymentProvider>
                    <AmountSection />
                    <EditAmount />
                </BillPaymentProvider>
            </div>
        )
    }
}

export default App
