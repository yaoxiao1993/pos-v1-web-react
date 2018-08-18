import React, { Component } from 'react';
import './App.css';
import GoodsList from './GoodsList'

class App extends Component {
  constructor(){
    super()
    this.state={
      SelectedItems:[]
    };
  }

  handleAddingCartItems(item){
    const CartItems = this.state.SelectedItems
    CartItems.push(item)
    this.setState({
      SelectedItems: CartItems      
    })
    console.log(CartItems)
  }

  render() {
    return (
      <div className="App">
        <h2>商品列表</h2>
          <GoodsList onAddingCartItems={this.handleAddingCartItems.bind(this)}/>
        <h2>购物车列表</h2>
        <div className="CartList">
            <table id="CartTable">
                <thead>
                    <tr>
                        <th>条形码</th>
                        <th>商品名</th>
                        <th>单位</th>
                        <th>单价</th>
                        <th>优惠信息</th>
                        <th>数量</th>
                        <th>小计</th> 
                    </tr>
                </thead>
                <tbody id="CartTbody">{
                  this.state.SelectedItems.map((item,i)=><tr>
                    <td>{item.barcode}</td>
                    <td>{item.name}</td>
                    <td>{parseFloat(item.price).toFixed(2)}</td>
                    <td>{item.unit}</td>
                    <td>{item.promotion}</td>
                    <td>{item.count}</td>
                    <td>{parseFloat(item.actualCount*item.price).toFixed(2)}</td>
                  </tr>    
                  )
                }             
                </tbody>
            </table>
        </div>
        <button id="figure" type="submit">确认购买</button>
      </div>
    );
  }
}

export default App;
