# Vue基础知识

### vue事件基本使用
```
prevent:阻止默认事件(常用)
stop：阻止事件冒泡(常用)
once:事件只触发一次(常用)
capture:使用事件的捕获模式
self：只有event.target是当前操作的元素才触发事件
passive：事件的默认行为立即执行，无需等待事件回调执行完毕
@scroll:鼠标或键盘上上下下---滚动条移动
@wheel：鼠标滚轮事件 --优先响应回应回调事件


注：
1.使用v-on:xxx或@xxx绑定事件，其中xxx是事件名
2、事件回调需要配置在methods对象中，最终会在vm上
3.methods 中配置函数，不要使用剪头函数，否则this就不是vm了
4、methods中配置函数，都是被Vue所管理的函数，this指向的是vm或组件实例对象
5、@click='demo'和@click='demo($event)'效果一致，但后者可以传参
```
### 键盘事件
```
@keyup: 输入每个字符响应事件,按下去松手
@keyup.enter:代表回车
@keydown:按下触发的

常用按键别名：
回车=>enter
删除=>delete(捕获删除和退格键)
退出=>esc
空格=>space
换行=>tab(特殊，必须配合keydown)
上=>up
下=>down
左=>left
右=>right
注：多个字母拼的全部小写中间加-，如：@keyup.caps-lock
    系统修饰键：tab、ctrl、alt、shift、meta(win键)键需要和keydown组合使用
```