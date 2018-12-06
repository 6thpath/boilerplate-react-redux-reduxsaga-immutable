import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getItems } from '../actions'

import '../style/App.css'
import 'antd/dist/antd.css'

import { css } from 'react-emotion'
import { BarLoader } from 'react-spinners'
import { Button } from 'antd'

class App extends Component {
  render() {
    const override = css`
    display: block;
    margin: 0;
    `
    return (
      <div style={{padding: 0}}>
        <BarLoader
          className={override}
          widthUnit={'vw'}
          width={100}
          color={'#36D7B7'}
          loading={this.props.isLoading}
        />
        <Button onClick={() => this.props.getItems()}>Fetch</Button>
        {
          this.props.items.map((item, i) => <p key={i}>{item.title}</p>)
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.appState.get('isLoading'),
    items: state.appState.get('items')
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getItems: () => dispatch(getItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
