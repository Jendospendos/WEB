import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'ФСБ',
                    name: 'ФСБ'
                },
                {
                    key: 'Безопасность',
                    name: 'Безопасность'
                },
                {
                    key: 'Обследование',
                    name: 'Обследование'
                }

            ]
        }
    }
  render() {
    return (
      <div className='all__categories'>
      <div className='categories'>
        {
           this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
           )) 
        }
      </div>
      </div>
    )
  }
}

export default Categories
