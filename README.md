# 2BLOG_Progress_ball
a document progress ball widget from wordpress theme 2blog.

#### 功能特性

- 文档进度（波浪动画及数字显示）
- 顶部/底部直达按钮（可配置Emoji图标）
- 可选页面显示模式切换（可手动适配）

![2blog_widget](https://raw.githubusercontent.com/2Broear/2BLOG_Progress_ball/main/2blog_progress_ball.gif "2blog progress ball")

## 使用说明
提供两种初始化方式，可选择 _手动加载_ 脚本初始化，也可直接在前端脚本中使用 `xhr` _异步加载_ 资源完成初始化。
#### Usage 01
外挂 `script` 脚本资源后初始化：
```html
<script src="https://your.domain/path/to/main.js"></script>
<script>
    new progress_ball.init();
</script>
```
#### Usage 02
异步加载脚本资源完成初始化（fetch 示例）：
```javascript
fetch('https://your.domain/path/to/main.js').then(()=>{
    new progress_ball.init();
});
```
## 初始化参数（可选）
在初始化脚本时，可携带部分参数对象以重载脚本默认配置，常用配置项如下列表所示（`a->b` 表示对象 `a` 的子对象 `b`）：

#### 静态参数

| 参数 | 描述 | 类型 | 备注 |
| :---- | :---- | :---- | :---- |
| size | 进度球大小 | Number | 默认 `50` px |
| smooth->scroll | 滚动间隔 | Number | 默认 `200` ms；值越大滚动越流畅（可能消耗性能） |
| smooth->click | 点击间隔 | Number | 默认 `200` ms；值越大点击延时越长（防止频繁点击） |
| scheme->theme | 主题颜色 | String | 默认 `#eb6844` |
| scheme->heavy | 背景颜色 | String | 默认 `#4a4a4a` |
| scheme->light | 文本颜色 | String | 默认 `whitesmoke` |
| classs->switcher | 主题切换类 | String | 默认 `progress_switcher` |

#### 元素参数

| 参数 | 描述 | 类型 | 备注 |
| :---- | :---- | :---- | :---- |
| sw_target | 主题切换应用元素 | Element | 默认 `document.body`；点击主题切换后此元素将切换指定 class |
| top->text | 顶部元素文本 | String | 默认：'顶' |
| top->icon | 顶部元素图标 | String | __默认空值：__'' |
| bottom->text | 底部元素文本 | String | 默认：'底' |
| bottom->icon | 底部元素图标 | String | __默认空值：__'' |
| middle->text | 主题切换元素文本 | String | __默认空值：__'' |
| middle->icons->default | 主题切换元素图标（默认） | String | 默认：'☀️' |
| middle->icons->actived | 主题切换元素图标（切换） | String | 默认：'🌙' |

### 携带对象初始化示例
```javascript
// 自定义参数对象示例
const custom_args = {
    static: {
        scheme: {
            theme: 'orange',
            heavy: '#2b2b2b',
            light: '#ffffff',
        },
    },
    element: {
        top: {
            icon: '👆',
        },
        bottom: {
            icon: '👇',
        },
    },
};
// 初始化并重载自定义配置
new progress_ball.init(custom_args);
```

## 其他
有任何问题及建议可提 issue
