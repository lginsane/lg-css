# 大小size

按需使用

```按需使用
import 'lg-css/dist/size.css'
or
import 'lg-css/size.css'
```

自定义配置

```自定义配置
@import "lg-css/packages/scss/common/mixin.scss";
// 字体
$font-size: (40, 50, 60);
@include customStyle('font-size', $font-size);

// 外边距
$margin-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
@include customStyle('margin', $font-size);

// 内边距
$padding-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
@include customStyle('padding', $font-size);

// 宽度(px)
$width-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
@include customStyle('width', $font-size);

// 高度(px)
$height-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
@include customStyle('height', $font-size);

// 宽度百分比
$width-percent: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
@include customStyle('width-percent', $font-size);

// 高度百分比
$height-percent: (50, 100);
@include customStyle('height-percent', $font-size);
```

使用例子：

* 字体：`.fs-10`、`.fs-12`
* 宽度(px)：`.w-10`、`.w-20`
* 宽度百分比：`.width-10`、`.width-20`
* 高度(px)：`.h-10`、`.h-20`
* 高度百分比：`.height-10`、`.height-20`
* 外边框：`m-10`、`m-20`
    - 上：`mt-10`、`mt-20`
    - 下：`mb-10`、`mb-20`
    - 左：`ml-10`、`ml-20`
    - 右：`mr-10`、`mr-20`
* 内边框：`p-10`、`p-20`
    - 上：`pt-10`、`pt-20`
    - 下：`pb-10`、`pb-20`
    - 左：`pl-10`、`pl-20`
    - 右：`pr-10`、`pr-20`
