<h5>vue-paging</h5>
<h6> vue1.0分页插件  （～～）</h6>
<br>
<font color="blue">先看看效果～～～</font>
<img src="http://g.recordit.co/ncFkGLLXnL.gif">

<font color="blue">使用方法</font>

*  引入 vue1.0.js
*  引入 pagging.js
*  引用 pagging.css
*  添加组件节点  并且传递参数datas  添加回调方法 topage
```
	<paging :options="datas" v-on:topage="toPageFunction"></paging>
```


<font color="blue">参数列表</font>

```
datas:{
                    count:100, //总条数
                    pageSize:5,//每页条数
                    bindpage:1,//首次显示页数
                    maxShowSize:6//页数过多时左右最多显示多少页
                }
```
<font color="blue">QA</font>
*  凑合用吧
*  ( - - ! )  过几天再加个2.0的


