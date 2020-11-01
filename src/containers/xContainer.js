import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { add, sub, reset } from '../redux/actions/xActions'

import { Button } from '@material-ui/core'


function XContainer({esasdata, message, add, ...props}) {

    return (
        <div>
            <Button onClick={add} style={{ color: "white", backgroundColor: "black" }}>Ekle</Button>
            <Button onClick={props.sub} style={{ color: "white", backgroundColor: "black" }}>Çıkar</Button>
            <Button onClick={props.reset} style={{ color: "white", backgroundColor: "black" }}>Sıfırla</Button>
            <h1>{esasdata}</h1>
            <h1>{message}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    esasdata: state.x.esasdata,
    message: state.x.message,
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
    reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(XContainer)


/* function XContainer({ dispatch, esasdata, message }) {

    const a = () => {
        dispatch(add())
        console.log("esasdata eklemesi", esasdata, message)
    }

    const b = () => {
        dispatch(sub())
        console.log("esasdata çıkarması", esasdata, message)
    }

    const c = () => {
        dispatch(reset())
        console.log("esasdata sıfırlaması", esasdata, message)
    }

    return (
        <div>
            <Button onClick={a} style={{ color: "white", backgroundColor: "black" }}>Ekle</Button>
            <Button onClick={b} style={{ color: "white", backgroundColor: "black" }}>Çıkar</Button>
            <Button onClick={c} style={{ color: "white", backgroundColor: "black" }}>Sıfırla</Button>
            <h1>{esasdata}</h1>
            <h1>{message}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    esasdata: state.x.esasdata,
    message: state.x.message,
})

export default connect(mapStateToProps)(XContainer) */