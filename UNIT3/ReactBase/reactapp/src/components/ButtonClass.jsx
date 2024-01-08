import { Component } from 'react'

class ButtonClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: this.props.pippo,
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return  (
            <button onClick={this.incrementCount}>
                Il conteggio del bottone classe e {this.state.count}
            </button>
        )
    }
}

export default ButtonClass