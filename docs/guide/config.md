# 自定义配置

### 一、样式覆盖（推荐）

```index.scss
// 重写你需要更改的
@forward 'lg-css/packages/scss/common/var.scss' with (
    $color: ('000': #000000, 'fff': #ffffff);
    $bg-color: ('000': #000000, 'fff': #ffffff);
    $font-size: (40, 50, 60);
    $margin-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
    $padding-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
    $width-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
    $height-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
    $width-percent: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
    $height-percent: (50, 100);
);
```

### 二、引入mixin文件，执行内置方法

- 创建 index.scss 文件

```index.scss
@import "lg-css/packages/scss/common/mixin.scss"; // 引入

@include customStyle($type, $list); // 调用 mixin 中 customStyle 方法
```

- 命名配对，详细使用参考[大小size](/basics/size)、[颜色color](/basics/color)、[背景颜色background](/basics/background)

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

