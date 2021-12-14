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

* 字体：`.fs10`、`.fs12`
* 宽度(px)：`.w10`、`.w20`
* 宽度百分比：`.width-10`、`.width-20`
* 高度(px)：`.h10`、`.h20`
* 高度百分比：`.height-10`、`.height-20`
* 外边框：`m10`、`m20`
    - 上：`mt10`、`mt20`
    - 下：`mb10`、`mb20`
    - 左：`ml10`、`ml20`
    - 右：`mr10`、`mr20`
* 内边框：`p10`、`p20`
    - 上：`pt10`、`pt20`
    - 下：`pb10`、`pb20`
    - 左：`pl10`、`pl20`
    - 右：`pr10`、`pr20`
