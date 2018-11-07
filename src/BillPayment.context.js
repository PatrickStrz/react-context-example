import React from 'react'

export const BillPaymentContext = React.createContext()

export class BillPaymentProvider extends React.Component {
    state = {
        amount: 5,
        startDate: null,
        endDate: null,
    }

    actions = {
        setAmount: amount => {
            this.setState({ amount })
        },
    }

    render() {
        const value = {
            state: this.state,
            actions: this.actions,
        }
        return (
            <BillPaymentContext.Provider value={value}>
                {this.props.children}
            </BillPaymentContext.Provider>
        )
    }
}
