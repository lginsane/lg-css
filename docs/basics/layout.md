# 布局 layout

按需使用

```
import 'lg-css/dist/layout/index.css'
or
import 'lg-css/layout/index'
```

#### 1. 元素

| 类名 | 样式                   |
| ---- | ---------------------- |
| .db  | display: block; |
| .dib | display: inline-block; |
| .di  | display: inline; |
| .dn  | display: none; |

#### 2. 浮动

| 类名 | 样式          |
| ---- | ------------- |
| .fl  | float: left; |
| .fr  | float: right; |
| .fn  | float: none; |

#### 3. 定位

| 类名      | 样式                |
| --------- | ------------------- |
| .relative | position: relative; |
| .absolute | position: absolute; |
| .fixed    | position: fixed; |
| .static   | position: static; |
| .sticky   | position: sticky; |

| 类名             | 样式                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| .absolute-center | position: absolute; left:50%; top:50%; transform:translate(-50%, -50%); |
| .fixed-center    | position: fixed; left:50%; top:50%; transform:translate(-50%, -50%); |

#### 4. 溢出

| 类名 | 样式          |
| ---- | ------------- |
| .oh  | overflow: hidden; |
| .oa  | overflow: auto; |

#### 5.flex 弹性

| 类名            | 样式                            |
| --------------- | ------------------------------- |
| flex            | display: flex; |
| inline-flex     | display: inline-flex; |
| flex-column     | flex-direction: column; |
| flex-row        | flex-direction: row; |
| flex-wrap       | flex-wrap: wrap; |
| flex-nowrap     | flex-wrap: nowrap; |
| flex-shrink-0   | flex-shrink: 0; |
| flex-grow-1     | flex-grow: 1; |
| 水平方向        |                                 |
| justify-start   | justify-content: flex-start; |
| justify-end     | justify-content: flex-end; |
| justify-center  | justify-content: center; |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around; |
| 垂直方向        |                                 |
| items-start     | align-items: flex-start; |
| items-end       | align-items: flex-end; |
| items-center    | align-items: center; |
| items-baseline  | align-items: baseline; |
| items-stretch   | align-items: stretch; |

| 类名                        | 样式                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| .flex-center                | display: flex; justify-content: center; align-items: center; |
| .flex-between-center        | display: flex; justify-content: space-between; align-items: center; |
| .flex-around-center         | display: flex; justify-content: space-around; align-items: center; |
| .flex-column-center         | display: flex; flex-direction: column; justify-content: center; align-items: center; |
| .flex-column-between-center | display: flex; flex-direction: column; justify-content: space-between; align-items: center; |
| .flex-column-around-center  | display: flex; flex-direction: column; justify-content: space-around; align-items: center; |
