import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import loadAllItems from './database'
import loadPromotions from './loadPromotions'
import $ from 'jquery'

var selectedItem=JSON.parse(localStorage.getItem("selectedItemInfo"));
console.log(selectedItem)
var allItems=loadAllItems()
var promotions=loadPromotions()

class SelectList extends Component {
    constructor(props){
      super(props)
      // this.delete=this.delete.bind(this)
      // this.add=this.add.bind(this)
      // this.cart=this.cart.bind(this)
    }
  
    add(e){
      var x = $(e.target).parent().parent().find("td")
      var y = x.eq(0).text()
      selectedItem.push(y)
      var currentInput = $(e.target).parent().find("input")
      var currentNum = $(e.target).parent().find("input").val()
      var changedNum = parseInt(currentNum,10)+1
      currentInput.val(changedNum)
    }
  
    delete(e){
      var x = $(e.target).parent().parent().find("td")
      var y = x.eq(0).text()
      var isBarcodeExist = $.inArray(y,selectedItem)
      if(isBarcodeExist>=0){
          selectedItem.splice(isBarcodeExist,1)
          var currentInput = $(e.target).parent().find("input")
          var currentNum = $(e.target).parent().find("input").val()
          var changedNum = parseInt(currentNum,10)-1
          currentInput.val(changedNum)
      }  
    }
  
    figure(e){
      var x = $(e.target).parent().find("td")
      var y = x.eq(0).text()
      selectedItem.push(y)
      var z = $(e.target).parent().find("input")
      z.text(parseInt(z.text(),10)+1);
    }
  
    render() {
      return (
        <div className="SelectList">
          <table id="SelectTable">
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
  
  // ReactDOM.render(<SelectList />, document.getElementById('table_id'));

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

