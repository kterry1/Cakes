import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux';

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
    numOfCakes: state.cake.numOfCakes
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)


