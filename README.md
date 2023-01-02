# 关于
* 大家好，这是来自于大佬mist启发的前后端独立的个人blog，大部分ui设计都来自于他，做这个网页的初衷其实是纪录自己的无聊生活与无聊的代码片段，快要找工作了哎……希望可以找个稳定一点的工作来维持生活吧，对了这里是mist的[Github](https://)
* 为什么起名为longan喃，这个就要其实就是<font class="text-color-1" color="#f44336">桂圆</font>的英文翻译，同时也是作为我QQ的网名，
* 关于后端采用的nodejs + express框架+mysql数据库 你可以在这里[找到他的源码](https://)
* 以下是预览图：
* ![](https://huatu.98youxi.com/markdown/work/uploads/upload_15aa35b7dc61207b3cc3eae244323d80.png)
* ![](https://huatu.98youxi.com/markdown/work/uploads/upload_85346fd5985a97cb4232a7eb5c89686b.png)
* ![](https://huatu.98youxi.com/markdown/work/uploads/upload_1c479d250ac6c51e54ecc8759438b8ca.png)
![Uploading file..._wf168kvdm]()




## 初始化
前往 src\util\GithubUserName.js 修改自己的Github账号
前往src\util\baseimgurl.js  修改自己的服务器地址


### * 目前进度

* 友链<font class="text-color-2" color="#e91e63">目前仍然为静态</font>，后期我想采用一种独特的方式让大家提交
*  对组件缓存的bug不知道是什么原因，我的home页在某些情况总是返回到顶部，
可能是我设置路由规则问题

```const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: "/", name: "home", component: Home,
        meta: {
          keepAlive: true //需要被缓存
        }
      }, //主页
 
      {
        path: "/projects", name: "projects", component: Projects,
      },//项目页
      {
        path: "/about", name: "about", component: About,
      },//关于
      {
        path: "/links", name: "links", component: Links,
      },//友链
      {
        path: '/article/:id', name: "", component: Article, props: true //具体文章
      }
    ]
  },
  {
    path: '/send',
    name: 'send',
    component: Send,
  }
 
]

```

