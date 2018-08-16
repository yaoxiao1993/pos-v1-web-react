import React, { Component } from 'react';
import './App.css';
import formDuplicatedItem from './main.js';
import getSelectedItemInfo from './main.js';
import loadAllItems from './database'
import loadPromotions from './loadPromotions'
// import GoodList from './App'
import $ from 'jquery'

var selectedItem = GoodList.selectedItem;
var duplicatedItem = formDuplicatedItem(selectedItem);
var selectedItemInfo = getSelectedItemInfo(duplicatedItem);
var allItems=loadAllItems()
var promotions=loadPromotions()
console.log(selectedItemInfo)

class SelectList extends Component {
    constructor(props){
      super(props)
      this.selectedItem=[];
      // this.delete=this.delete.bind(this)
      // this.add=this.add.bind(this)
      // this.cart=this.cart.bind(this)
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
  
    figure(e){
      var x = $(e.target).parent().find("td")
      var y = x.eq(0).text()
      this.selectedItem.push(y)
      var z = $(e.target).parent().find("input")
      z.text(parseInt(z.text(),10)+1);
    }
  
    render() {
      return (
        <div className="GoodsList">
          <table id="table">
          <thead>
            <tr>
                <th>name</th>
                <th>price</th>
            </tr>
          </thead>
          <tbody id="tbody">
          {
            allItems.map(item => {
                return <tr><td>{item.name}</td><td>{item.price}</td><td className="cart"><button>数量</button></td><td className="number"><button className="delete" onClick={(e)=>{this.delete(e)}}>-</button><input className="changeNum" value="0"/><button className="add" onClick={(e)=>{this.add(e)}}>+</button></td></tr> 
            })
          }
          </tbody>
        </table>
        <a id="cartpage" href="cart.html" target="_blank"><input type="submit">确定购买</input></a>
        </div>
      );
    }
  }
  
  export default SelectList;

// $(document).ready(function(){
//     for(var i in selectedItemInfo){
//         $('tbody').after('<tr><td>'+selectedItemInfo[i].name+'</td><td>'+selectedItemInfo[i].price+'</td><td class="number"><button class="delete">-</button><input class="changeNum" value='+selectedItemInfo[i].num+'><button class="add">+</button></td></tr>')
//     }

//     $(".delete").click(function(){
//         var x = $(this).parent().parent().find("td")
//         var y = x.eq(0).text()
//         for(var i in selectedItemInfo){
//             if(y == selectedItemInfo[i].name){
//                 var currentInput = $(this).parent().find("input")
//                 var currentNum = $(this).parent().find("input").val()
//                 var changedNum = parseInt(currentNum)-1
//                 currentInput.val(changedNum)
//                 selectedItemInfo[i].num--;
//                 break;  
//             }
//         }
        
//     })
    
//     $(".add").click(function(){
//         var x = $(this).parent().parent().find("td")
//         var y = x.eq(0).text()
//         for(var i in selectedItemInfo){
//             if(y == selectedItemInfo[i].name){
//                 selectedItemInfo[i].num++;
//                 break;
//             }
//         }
//         var currentInput = $(this).parent().find("input")
//         var currentNum = $(this).parent().find("input").val()
//         var changedNum = parseInt(currentNum)+1
//         currentInput.val(changedNum)
//     })

//     $("#figure").click(function(){
//         var output = printInventory(selectedItemInfo);
//         alert(output)
//     })
// })

