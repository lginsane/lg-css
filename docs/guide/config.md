# 自定义配置

```
@import "lg-css/src/mixin.scss"; // 引入

@include customStyle($type, $list); // 调用 mixin 中 customStyle 方法
```

命名配对，详细使用参考[大小size](/basics/size)、[颜色color](/basics/color)、[背景颜色background](/basics/background)
| | \$type |\$list|使用|
| ---- | ---------------------- |---|---|
| 颜色 | 'color' |('000': #000000, 'fff': #ffffff)| `c-000` 、 `c-fff` |
| 背景颜色 | 'background-color' |('000': #000000, 'fff': #ffffff)| `bg-000` 、 `bg-fff` |
| 字体 | 'font-size' |(10, 20)| `fs10` 、 `fs20` |
| 宽度 | 'width' |(10, 20)| `w10` 、 `w20` |
| 宽度百分比 | 'width-percent' |(10, 20)| `width-10` 、 `width-20` |
| 高度 | 'height' |(10, 20)| `h10` 、 `h20` |
| 高度百分比 | 'height-percent' |(10, 20)| `height-10` 、 `height-20` |
| 外边框 | 'margin' |(10, 20)| `m10` 、 `m20` |
| 内边框 | 'padding' |(10, 20)| `p10` 、 `p20` |
