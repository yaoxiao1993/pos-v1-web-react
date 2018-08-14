import React, { Component } from 'react';
import './App.css';
import loadAllItems from './database.js';
import loadPromotions from './loadPromotions';

var allItems=loadAllItems()
var promotions=loadPromotions()
console.log(promotions)

class GoodsList extends Component {
  render() {
    return (
      <div className="GoodsList">
        <table id="table">
        <thead>
          <tr>
            <th>barcode</th>
            <th>name</th>
            <th>unit</th>
            <th>price</th>
            <th>promotion</th>
          </tr>
        </thead>
        <tbody id="tbody">{
          allItems.map(item => {
            var count = 0;
            for(var i in promotions[0].barcodes){
              if(promotions[0].barcodes[i]===item.barcode){
                return <tr><td>{item.barcode}</td><td>{item.name}</td><td>{item.unit}</td><td>{item.price}</td><td>买三送一</td><td className="cart"><button>加入购物车</button></td><td className="number"><button className="delete">-</button><input className="changeNum" value="0"/><button className="add"></button></td></tr>
              }else{
                count++;
              }           
            }
            if(count === promotions[0].barcodes.length){
              return <tr><td>{item.barcode}</td><td>{item.name}</td><td>{item.unit}</td><td>{item.price}</td><td>无</td><td className="cart"><button>加入购物车</button></td><td className="number"><button className="delete">-</button><input className="changeNum" value="0"/><button className="add"></button></td></tr>
            } 
          })
        }
        </tbody>
      </table>
      <a id="cartpage" href="cart.html" target="_blank"><button>购物车</button></a>
      </div>
    );
  }
}

export default GoodsList;
