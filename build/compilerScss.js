const sass = require('sass')
const path = require('path')
// 路径
const srcPath = path.join(__dirname, '../packages/scss')
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

// 编译/压缩 scss
const compilerCss = function(fileName) {
    try {
        const result = sass.renderSync({file: getStylePath(fileName)});
        const cssFileName = fileName.replace('scss', 'css')
        fs.outputFileSync(path.join(distPath, cssFileName), new CleanCSS().minify(result.css.toString()).styles)
        console.log(`${fileName} 编译完成`)
        currentIndex++
        currentIndex === fileLength && console.log(`------编译结束--------`)
    } catch (error) {
        throw error
    }
}
console.log('------编译开始--------')
if (fs.existsSync(srcPath)) {
    fileList = fs.readdirSync(srcPath).filter(file => file.indexOf('scss') >= 0)
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
