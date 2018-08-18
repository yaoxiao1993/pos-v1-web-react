import React, { Component } from 'react';

class Item extends Component{
    constructor(){
        super()
        this.state = {
            count: 1
        }
    }
    handleCountReduceButton(){
        this.setState( (prevState) => {
            return { count: Math.max(0, this.state.count-1) }
        })
    }
    handleCountAddButton(){
        this.setState( (prevState) => {
            return { count: this.state.count+1 }
        })
    }
    handleAddingCartButton(){
        if (this.props.onAddingCart) {
            const items = this.props.itemrow
            items.count = this.state.count
            this.props.onAddingCart(items)            
        }
    }
    
    render(){
        return(
            <tr>
                <td>{this.props.itemrow.barcode}</td>
                <td>{this.props.itemrow.name}</td>
                <td>{parseFloat(this.props.itemrow.price).toFixed(2)}</td>
                <td>{this.props.itemrow.unit}</td>
                <td>{this.props.itemrow.promotion}</td>
                <td>
                    <button onClick={this.handleCountReduceButton.bind(this)} className="countReduce">-</button>
                    <span className="count">{this.state.count}</span> 
                    <button onClick={this.handleCountAddButton.bind(this)} className="countAdd">+</button>   
                </td>
                <td><button onClick={this.handleAddingCartButton.bind(this)} className="addingCart">加入购物车</button></td>
            </tr>             
        )
    }
}
export default Item;