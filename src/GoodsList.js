import React, { Component } from 'react';
import Item from './Item'

class GoodsList extends Component {
  handleAddingCartItems(item){
    if (this.props.onAddingCartItems) {
        this.props.onAddingCartItems(item)
    }
}

  render() {
    const allItems = [
      { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, promotion: '买二送一' },
      { barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, promotion: '买二送一' },
      { barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50, promotion: '无' },
      { barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00, promotion: '无' },
      { barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00, promotion: '无' },
      { barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50, promotion: '买二送一' }
    ]  

    return (
      <div className="GoodsList">
        <table id="GoodsTable">
        <thead>
          <tr>
            <th>条形码</th>
            <th>商品名</th>
            <th>单位</th>
            <th>单价</th>
            <th>优惠信息</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tbody">{
          allItems.map((item,i) =><Item itemrow={item} key={i} index={i} onAddingCart={this.handleAddingCartItems.bind(this)}/>)
        }
        </tbody>
      </table>
      </div>
    );
  }
}

export default GoodsList;
