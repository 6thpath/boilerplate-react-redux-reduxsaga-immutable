import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getItems } from '../actions'

import '../style/App.css'
import 'antd/dist/antd.css'

import { BarLoader } from 'react-spinners'
import { Affix, Button } from 'antd'

class App extends Component {
  render() {
    return (
      <div>
        <Affix offsetTop={0} style={{
          height: 3
        }}>
          <BarLoader
            widthUnit={'vw'}
            width={100}
            heightUnit={'px'}
            height={3}
            color={'#36D7B7'}
            loading={this.props.isLoading}
          />
        </Affix>
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
