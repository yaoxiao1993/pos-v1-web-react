import React, { Component } from 'react';
import './App.css';
import loadAllItems from './database.js';
import loadPromotions from './loadPromotions.js';
// import selectedItem from './main.js'
import {formDuplicatedItem,getSelectedItemInfo}from './main.js';
// import getSelectedItemInfo from './main.js';
import $ from 'jquery'

var allItems=loadAllItems()
var promotions=loadPromotions()

class GoodsList extends Component {
  constructor(props){
    super(props)
    this.selectedItem=[];
    this.submit=this.submit.bind(this)
  }

  add(e){
    var x = $(e.target).parent().parent().find("td")
    var y = x.eq(0).text()
    this.selectedItem.push(y)
    var currentInput = $(e.target).parent().find("input")
    var currentNum = $(e.target).parent().find("input").val()
    var changedNum = parseInt(currentNum,10)+1
    currentInput.val(changedNum)
  }

  delete(e){
    var x = $(e.target).parent().parent().find("td")
    var y = x.eq(0).text()
    var isBarcodeExist = $.inArray(y,this.selectedItem)
    if(isBarcodeExist>=0){
        this.selectedItem.splice(isBarcodeExist,1)
        var currentInput = $(e.target).parent().find("input")
        var currentNum = $(e.target).parent().find("input").val()
        var changedNum = parseInt(currentNum,10)-1
        currentInput.val(changedNum)
    }  
  }

  cart(e){
    var x = $(e.target).parent().parent().find("td")
    var y = x.eq(0).text()
    this.selectedItem.push(y)
    var currentInput = $(e.target).parent().find("input")
    var currentNum = $(e.target).parent().find("input").val()
    var changedNum = parseInt(currentNum,10)+1
    currentInput.val(changedNum)
  }

  submit(){
      var formedDuplicatedItem = formDuplicatedItem(this.selectedItem)
      var selectedItemInfo = getSelectedItemInfo(formedDuplicatedItem);
      selectedItemInfo=JSON.stringify(selectedItemInfo)
      localStorage.setItem("selectedItemInfo", selectedItemInfo);
  }

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
        <tbody id="tbody">
          <h1>商店</h1>
        {
          allItems.map(item => {
            var count = 0;
            for(var i in promotions[0].barcodes){
              if(promotions[0].barcodes[i]===item.barcode ){
                return <tr><td>{item.barcode}</td><td>{item.name}</td><td>{item.unit}</td><td>{item.price}</td><td>买三送一</td><td className="cart"><button onClick={(e)=>{this.cart(e)}}>加入购物车</button><button className="delete" onClick={(e)=>{this.delete(e)}}>-</button><input className="changeNum" value="0"/><button className="add" onClick={(e)=>{this.add(e)}}>+</button></td></tr> 
              }else{
                count++
              }
            }
            if(count === promotions[0].barcodes.length){
              return <tr><td>{item.barcode}</td><td>{item.name}</td><td>{item.unit}</td><td>{item.price}</td><td>无</td><td className="cart"><button onClick={(e)=>{this.cart(e)}}>加入购物车</button><button className="delete" onClick={(e)=>{this.delete(e)}}>-</button><input className="changeNum" value="0"/><button className="add" onClick={(e)=>{this.add(e)}}>+</button></td></tr>
            }
          })
        }
        </tbody>
      </table>
      <a id="cartpage" href="cart.html" target="_blank"><button onClick={this.submit}>购物车</button></a>
      </div>
    );
  }
}

export default GoodsList;
