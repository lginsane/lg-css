const stylus = require('stylus')
const path = require('path')
// 路径
const srcPath = path.join(__dirname, '../packages/stylus')
const distPath = path.join(__dirname, '../dist')
// 压缩css
const CleanCSS = require('clean-css')
const fs = require('fs-extra')

let fileLength, fileList, currentIndex
const getStylePath = (name) => {
    return path.join(srcPath, name)
}

// 判断文件是否存在
const checkComponentHasStyle = (component) => {
    return fs.existsSync(getStylePath(component))
}

// 编译/压缩 stylus
const compilerCss = function(fileName) {
    const str = fs.readFileSync(getStylePath(fileName), 'utf8');
    stylus(str)
        .set('filename', getStylePath(fileName))
        .render(function(err, css){
            if (err) throw err;
            const cssFileName = fileName.replace('styl', 'css')
            fs.outputFileSync(path.join(distPath, cssFileName), new CleanCSS().minify(css).styles)
            console.log(`${fileName} 编译完成`)
            currentIndex++
            currentIndex === fileLength && console.log(`------编译结束--------`)
        });
}
console.log('------编译开始--------')
if (fs.existsSync(srcPath)) {
    fileList = fs.readdirSync(srcPath).filter(file => file.indexOf('styl') >= 0)
    fileLength = fileList.length
    currentIndex = 0
    fileList.forEach(name => {
        if (checkComponentHasStyle(name)) {
            compilerCss(name)
        } else {
            console.log('不存在的文件:' + name)
        }
    })
}
