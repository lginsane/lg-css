import{_ as e,c,o,a as d}from"./app.7c8ac370.js";const _='{"title":"\u5927\u5C0Fsize","description":"","frontmatter":{},"relativePath":"basics/size.md","lastUpdated":1639476801951}',i={},t=d(`<h1 id="\u5927\u5C0Fsize" tabindex="-1">\u5927\u5C0Fsize <a class="header-anchor" href="#\u5927\u5C0Fsize" aria-hidden="true">#</a></h1><p>\u6309\u9700\u4F7F\u7528</p><div class="language-\u6309\u9700\u4F7F\u7528"><pre><code>import &#39;lg-css/dist/size.css&#39;
or
import &#39;lg-css/size.css&#39;
</code></pre></div><p>\u81EA\u5B9A\u4E49\u914D\u7F6E</p><div class="language-\u81EA\u5B9A\u4E49\u914D\u7F6E"><pre><code>@import &quot;lg-css/packages/scss/common/mixin.scss&quot;;
// \u5B57\u4F53
$font-size: (40, 50, 60);
@include customStyle(&#39;font-size&#39;, $font-size);

// \u5916\u8FB9\u8DDD
$margin-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
@include customStyle(&#39;margin&#39;, $font-size);

// \u5185\u8FB9\u8DDD
$padding-size: (15, 20, 25, 30, 35, 40, 45, 50, 55, 60);
@include customStyle(&#39;padding&#39;, $font-size);

// \u5BBD\u5EA6(px)
$width-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
@include customStyle(&#39;width&#39;, $font-size);

// \u9AD8\u5EA6(px)
$height-size: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200);
@include customStyle(&#39;height&#39;, $font-size);

// \u5BBD\u5EA6\u767E\u5206\u6BD4
$width-percent: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
@include customStyle(&#39;width-percent&#39;, $font-size);

// \u9AD8\u5EA6\u767E\u5206\u6BD4
$height-percent: (50, 100);
@include customStyle(&#39;height-percent&#39;, $font-size);
</code></pre></div><p>\u4F7F\u7528\u4F8B\u5B50\uFF1A</p><ul><li>\u5B57\u4F53\uFF1A<code>.fs-10</code>\u3001<code>.fs-12</code></li><li>\u5BBD\u5EA6(px)\uFF1A<code>.w-10</code>\u3001<code>.w-20</code></li><li>\u5BBD\u5EA6\u767E\u5206\u6BD4\uFF1A<code>.width-10</code>\u3001<code>.width-20</code></li><li>\u9AD8\u5EA6(px)\uFF1A<code>.h-10</code>\u3001<code>.h-20</code></li><li>\u9AD8\u5EA6\u767E\u5206\u6BD4\uFF1A<code>.height-10</code>\u3001<code>.height-20</code></li><li>\u5916\u8FB9\u6846\uFF1A<code>m-10</code>\u3001<code>m-20</code><ul><li>\u4E0A\uFF1A<code>mt-10</code>\u3001<code>mt-20</code></li><li>\u4E0B\uFF1A<code>mb-10</code>\u3001<code>mb-20</code></li><li>\u5DE6\uFF1A<code>ml-10</code>\u3001<code>ml-20</code></li><li>\u53F3\uFF1A<code>mr-10</code>\u3001<code>mr-20</code></li></ul></li><li>\u5185\u8FB9\u6846\uFF1A<code>p-10</code>\u3001<code>p-20</code><ul><li>\u4E0A\uFF1A<code>pt-10</code>\u3001<code>pt-20</code></li><li>\u4E0B\uFF1A<code>pb-10</code>\u3001<code>pb-20</code></li><li>\u5DE6\uFF1A<code>pl-10</code>\u3001<code>pl-20</code></li><li>\u53F3\uFF1A<code>pr-10</code>\u3001<code>pr-20</code></li></ul></li></ul>`,7),n=[t];function s(l,p,a,r,m,h){return o(),c("div",null,n)}var z=e(i,[["render",s]]);export{_ as __pageData,z as default};
