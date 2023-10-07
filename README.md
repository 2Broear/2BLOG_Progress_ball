# 2BLOG_Progress_ball
A multiple function document progress-ball widget from wordpress theme 2blog.

#### 功能简介

- 文档进度（波浪动画及实时数字显示）
- 顶部/底部跳转按钮（可配置 emoji 图标或文字）
- 可选页面显示模式切换（需手动适配或缓存）

![2blog_widget](https://raw.githubusercontent.com/2Broear/2BLOG_Progress_ball/main/2blog_progress_ball.gif "2blog progress ball")

## 使用说明
可 _手动_ 加载脚本并完成初始化，也可直接在前端中使用 _异步（`xhr`）_ 加载资源后完成初始化：
#### Usage 01
外挂 `script` 标签后初始化：
```html
<script src="https://cdn.jsdelivr.net/gh/2Broear/2BLOG_Progress_ball/main.js"></script>
<script>
    new progress_ball.init();
</script>
```
#### Usage 02
异步加载脚本后初始化（`fetch` 示例）：
```javascript
fetch('https://your.domain/path/to/main.js').then(()=>{
    new progress_ball.init();
});
```
### 初始化参数（可选）
在初始化时，可携带部分参数对象以重载默认配置，常用配置项如下列表所示（`a->b` 表示对象 `a` 的子对象 `b`）：

#### static-> 静态参数

| 参数 | 类型 | 描述 | 备注 |
| :---- | :---- | :---- | :---- |
| size | Number | 进度球大小 | 默认 `50` px |
| smooth->scroll | Number | 滚动间隔 | 默认 `200` ms；值越小组件显示越流畅（页面性能消耗） |
| smooth->click | Number | 点击间隔 | 默认 `200` ms；值越大点击延时越长（阻止频繁点击） |
| scheme->theme | String | 主题颜色 | 默认 `#eb6844` |
| scheme->heavy | String | 背景颜色 | 默认 `#4a4a4a` |
| scheme->light | String | 文本颜色 | 默认 `whitesmoke` |
| classs->switcher | String | 主题切换类 | 默认 `progress_switcher` |

#### element-> 元素参数

| 参数 | 类型 | 描述 | 备注 |
| :---- | :---- | :---- | :---- |
| sw_target | DOM | 主题切换应用元素 | 默认 `document.body`；点击主题切换按钮后此元素将应用指定 class 类：`static->classs->switcher` |
| top->text | String | 顶部元素文本 | 默认 `顶` |
| top->icon | String | 顶部元素图标 | 默认 __（空）__ |
| bottom->text | String | 底部元素文本 | 默认 `底` |
| bottom->icon | String | 底部元素图标 | 默认 __（空）__ |
| middle->text | String | 主题切换元素文本 | 默认 __（空）__ |
| middle->icons->default | String | 主题切换元素图标（默认） | 默认 `☀️` |
| middle->icons->actived | String | 主题切换元素图标（切换） | 默认 `🌙` |

#### 携带对象参数初始化示例
```javascript
// 自定义参数对象
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
任何问题及建议可提 issue.
