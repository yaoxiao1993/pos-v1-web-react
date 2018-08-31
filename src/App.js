import React, { Component } from 'react';
import './App.css';
import GoodsList from './GoodsList'

class App extends Component {
  constructor(){
    super()
    this.state={
      SelectedItems:[],
      Total:0,
      subTotal:0,
    };
  }

  handleAddingCartItems(item){
    const CartItems = this.state.SelectedItems
    var isSameItem = false;
    var count = 0;

    if(CartItems.length!==0){
      for(var i in CartItems){
        if(CartItems[i].barcode===item.barcode){
          CartItems[i].count+=item.count
          isSameItem = true;
          break;
        }else{
          count++;
        }  

      }
      if(item.promotion==='买二送一' && isSameItem===true){
        var freeCount = Math.floor(CartItems[i].count / 2);
        CartItems[i].freeCount=freeCount
      }

      //count等于CartItems.length，则说明CartItems中没有当前加入的商品
      if(count === CartItems.length){
        CartItems.push(item)
      }
    }else{
      CartItems.push(item) 
    }

    for(var j in CartItems){
      if(CartItems[j].freeCount>0){
      }else{
        CartItems[j].freeCount=0
      }
    }

    this.setState({
      SelectedItems: CartItems
    })
    
  }

  render() {
    var Total = 0;
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
                        <th>添加数量</th>
                        <th>赠送数量</th>
                        <th>小计</th> 
                    </tr>
                </thead>
                <tbody id="CartTbody">{ 
                  this.state.SelectedItems.map((item,i)=>{
                  var subTotal = parseFloat(item.count*item.price).toFixed(2)
                  Total = ((Total*100 + subTotal*100)/100).toFixed(2);
                  return <tr key={i}>
                    <td>{item.barcode}</td>
                    <td>{item.name}</td>
                    <td>{parseFloat(item.price).toFixed(2)}</td>
                    <td>{item.unit}</td>
                    <td>{item.promotion}</td>
                    <td>{item.count}</td>
                    <td>{item.freeCount}</td>
                    <td>{subTotal}</td>
                  </tr>    
                  })
                }             
                </tbody>
            </table>
        </div>
        <div id="figure"><span>总计：</span><span>{Total}</span></div>
      </div>
    );
  }
}

export default App;
