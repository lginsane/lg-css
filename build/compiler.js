const less = require("less");
const sass = require("sass");
const stylus = require("stylus");
const path = require("path");
// 压缩css
const CleanCSS = require("clean-css");
const fs = require("fs-extra");

const type = process.argv[2];
if (!type) {
    console.log("请输入编译文件类型");
    process.exit(0);
}
const matchFile = {
    'less': 'less',
    'sass': 'scss',
    'stylus': 'styl'
}
// 路径
const srcPath = path.join(__dirname, `../packages/${matchFile[type]}`);
console.log(srcPath)
const distPath = path.join(__dirname, "../dist");
let fileLength, fileList, currentIndex;
const getStylePath = (name) => {
    return path.join(srcPath, name);
};

// 判断文件是否存在
const checkComponentHasStyle = (component) => {
    return fs.existsSync(getStylePath(component));
};
// less
const compilerLess = function(fileName) {
    const str = fs.readFileSync(getStylePath(fileName), 'utf8');
    less.render(str,{
        filename: getStylePath(fileName),
        compress: true
    },function(err, output) {
        if (err) throw err;
        const cssFileName = fileName.replace("less", "css");
        fs.outputFileSync(path.join(distPath, cssFileName), output.css)
        console.log(`${fileName} 编译完成`)
        currentIndex++
        currentIndex === fileLength && console.log(`------编译结束--------`)
    })
}
// scss
const compilerScss = function (fileName) {
    try {
        const result = sass.renderSync({ file: getStylePath(fileName) });
        const cssFileName = fileName.replace("scss", "css");
        fs.outputFileSync(
            path.join(distPath, cssFileName),
            new CleanCSS().minify(result.css.toString()).styles
        );
        console.log(`${fileName} 编译完成`);
        currentIndex++;
        currentIndex === fileLength && console.log(`------编译结束--------`);
    } catch (error) {
        throw error;
    }
};
// stylus
const compilerStylus = function (fileName) {
    const str = fs.readFileSync(getStylePath(fileName), "utf8");
    stylus(str)
        .set("filename", getStylePath(fileName))
        .render(function (err, css) {
            if (err) throw err;
            const cssFileName = fileName.replace("styl", "css");
            fs.outputFileSync(
                path.join(distPath, cssFileName),
                new CleanCSS().minify(css).styles
            );
            console.log(`${fileName} 编译完成`);
            currentIndex++;
            currentIndex === fileLength &&
                console.log(`------编译结束--------`);
        });
};
console.log("------编译开始--------");
if (fs.existsSync(srcPath)) {
    fileList = fs
        .readdirSync(srcPath)
        .filter((file) => file.indexOf(matchFile[type]) >= 0);
    fileLength = fileList.length;
    currentIndex = 0;
    fileList.forEach((name) => {
        if (checkComponentHasStyle(name)) {
            switch (type) {
                case "less":
                    compilerLess(name)
                    break;
                case "sass":
                    compilerScss(name);
                    break;
                case "stylus":
                    compilerStylus(name);
                    break;

                default:
                    console.log("请输入正确的编译文件类型：less、sass、stylus");
                    process.exit(0);
                    break;
            }

        } else {
            console.log("不存在的文件:" + name);
        }
    });
}
