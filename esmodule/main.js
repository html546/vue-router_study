// 如果是第三方模块不需要加./ 如果是文件模块需要加./
// 在另一个文件中将内容解构出来即可使用
// import 拥有声明功能
// import 放到页面的顶部
// import {str,str2,a} from './a.js';
import * as b from './a.js';
console.log(b.str,b.str2);
// b.a();
// xxx代表的是default后的结果
import xxx from './b.js';
console.log(xxx);