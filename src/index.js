import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoodsList from './App';


ReactDOM.render(<GoodsList />, document.getElementById('root'));
// ReactDOM.render(
//     <tbody>
//     {
//         allItems.map(function(item){
//             return <div>{$('tbody').after('<tr><td>'+item.barcode+'</td><td>'+item.name+'</td><td>'+item.unit+'</td><td>'+item.price+'</td><td class="cart"><button>加入购物车</button></td><td class="number"><button class="delete">-</button><input class="changeNum" value="0"/><button class="add">+</button></td></tr>')}</div>
//         })
//     }
//     </tbody>, 
//     document.getElementById('tbody')
// );
