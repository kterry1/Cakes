import React from 'react'
import {connect} from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams: {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    buyIceCream: () => dispatch(buyIceCream())
})

const mapStateToProps = (state) => ({
    numOfIceCreams: state.iceCream.numOfIceCreams
})

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)


