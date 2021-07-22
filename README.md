## [telegram gif](https://telegram.org/)

1. [rlottie](https://github.com/Samsung/rlottie) lottie 动画
2. [pako](https://github.com/nodeca/pako) 用pako.inflate解压

本地启动服务即可

## 使用

### 前端页面

1. 将 `dist` 下的资源放在项目的 `public` 等，几个文件要在同一个目录下
2. 页面 `script` 加载 `tgsticker.min.js`
3. 页面动画的标签为如下，其他 `srcset` 为 `pako` 压缩后的文件, 参考 `index.js`

```html
<picture class="js-tgsticker"><source type="application/x-tgsticker" srcset="/json/8940838e7dddc787d8"></picture>
```

4. 开启动画:

```javascript
document.querySelectorAll('.js-tgsticker').forEach(function (imgEl) {
  RLottie.init(imgEl, {"maxDeviceRatio":2, "cachingModulo":3, "unsupportedURL":"\/?notgs=1"});
});
```