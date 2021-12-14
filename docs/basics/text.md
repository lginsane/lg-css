# 字体 text

按需引入

```
import 'lg-css/dist/text.css'
or
import 'lg-css/text.css'
```

#### 1. 对齐方式

| 类名 | 样式                   |
| ---- | ---------------------- |
| .tl  | text-align: left; |
| .tr | text-align: right; |
| .tc  | text-align: center; |
| .tj  | text-align: justify; |

#### 2. 修饰方式

| 类名 | 样式                   |
| ---- | ---------------------- |
| .underline | text-decoration: underline; |

#### 3. 字体

| 类名 | 样式                   |
| ---- | ---------------------- |
| .i | font-style: italic; |
| .b  | font-weight: bold; |
| .indent-2| text-indent: 2em; |

#### 4. 溢出隐藏

```溢出隐藏
.ellipsis,
.ellipsis-1 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.ellipsis-2 {
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.ellipsis-3 {
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
```
- 溢出隐藏，更多行处理方案
```
import 'lg-css/packages/scss/common/mixin.scss' // 引入

// $line为行数
.ellipsis-{$line} {
    @include text-ellipsis($line);
}
```
