import{_ as t,c as e,o as d,a}from"./app.7c8ac370.js";const x='{"title":"\u5B57\u4F53 text","description":"","frontmatter":{},"relativePath":"basics/text.md","lastUpdated":1639476665288}',i={},r=a(`__VP_STATIC_START__<h1 id="\u5B57\u4F53-text" tabindex="-1">\u5B57\u4F53 text <a class="header-anchor" href="#\u5B57\u4F53-text" aria-hidden="true">#</a></h1><p>\u6309\u9700\u5F15\u5165</p><div class="language-"><pre><code>import &#39;lg-css/dist/text.css&#39;
or
import &#39;lg-css/text.css&#39;
</code></pre></div><h4 id="_1-\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1">1. \u5BF9\u9F50\u65B9\u5F0F <a class="header-anchor" href="#_1-\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th>\u7C7B\u540D</th><th>\u6837\u5F0F</th></tr></thead><tbody><tr><td>.tl</td><td>text-align: left;</td></tr><tr><td>.tr</td><td>text-align: right;</td></tr><tr><td>.tc</td><td>text-align: center;</td></tr><tr><td>.tj</td><td>text-align: justify;</td></tr></tbody></table><h4 id="_2-\u4FEE\u9970\u65B9\u5F0F" tabindex="-1">2. \u4FEE\u9970\u65B9\u5F0F <a class="header-anchor" href="#_2-\u4FEE\u9970\u65B9\u5F0F" aria-hidden="true">#</a></h4><table><thead><tr><th>\u7C7B\u540D</th><th>\u6837\u5F0F</th></tr></thead><tbody><tr><td>.underline</td><td>text-decoration: underline;</td></tr></tbody></table><h4 id="_3-\u5B57\u4F53" tabindex="-1">3. \u5B57\u4F53 <a class="header-anchor" href="#_3-\u5B57\u4F53" aria-hidden="true">#</a></h4><table><thead><tr><th>\u7C7B\u540D</th><th>\u6837\u5F0F</th></tr></thead><tbody><tr><td>.i</td><td>font-style: italic;</td></tr><tr><td>.b</td><td>font-weight: bold;</td></tr><tr><td>.indent-2</td><td>text-indent: 2em;</td></tr></tbody></table><h4 id="_4-\u6EA2\u51FA\u9690\u85CF" tabindex="-1">4. \u6EA2\u51FA\u9690\u85CF <a class="header-anchor" href="#_4-\u6EA2\u51FA\u9690\u85CF" aria-hidden="true">#</a></h4><div class="language-\u6EA2\u51FA\u9690\u85CF"><pre><code>.ellipsis,
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
</code></pre></div><ul><li>\u6EA2\u51FA\u9690\u85CF\uFF0C\u66F4\u591A\u884C\u5904\u7406\u65B9\u6848</li></ul><div class="language-"><pre><code>import &#39;lg-css/packages/scss/common/mixin.scss&#39; // \u5F15\u5165

// $line\u4E3A\u884C\u6570
.ellipsis-{$line} {
    @include text-ellipsis($line);
}
</code></pre></div>__VP_STATIC_END__`,13),n=[r];function l(s,o,c,h,p,_){return d(),e("div",null,n)}var f=t(i,[["render",l]]);export{x as __pageData,f as default};
