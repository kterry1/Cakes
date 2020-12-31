import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux';
import { BUY_CAKE } from '../redux/cake/cakeTypes';
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    buyCake: () => dispatch(buyCake())
})

const mapStateToProps = (state) => ({
    numOfCakes: state.numOfCakes
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)


