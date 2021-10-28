# 颜色color

按需使用
```
import 'lg-css/dist/color/index.css'
or
import 'lg-css/color/index'
```

自定义配置

```自定义配置
@import "lg-css/src/mixin.scss";

$bg-color: ('000': #000000, 'fff': #ffffff);
@include customStyle('background-color', $bg-color);
```

使用例子：
`.bg-000`、`.bg-fff`
