export default {
  pages: [
    'pages/index/index',
    'pages/animal/index',
    'pages/item/index',
    'pages/build/index',
    'pages/detail/index'
  ],
  tabBar: {
    "color": "#B2B2B2",
    "selectedColor": "#353535",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "人物",
        "iconPath": "./assets/tab-bar/WX-78_portrait.png",
        "selectedIconPath": "./assets/tab-bar/WX-78_portrait.png"
      },
      {
        "pagePath": "pages/animal/index",
        "text": "生物",
        "iconPath": "./assets/tab-bar/Rabbit.png",
        "selectedIconPath": "./assets/tab-bar/Rabbit.png"
      },
      {
        "pagePath": "pages/item/index",
        "text": "物品",
        "iconPath": "./assets/tab-bar/Backpack.png",
        "selectedIconPath": "./assets/tab-bar/Backpack.png"
      },
      {
        "pagePath": "pages/build/index",
        "text": "建筑",
        "iconPath": "./assets/tab-bar/Icon_Build.png",
        "selectedIconPath": "./assets/tab-bar/Icon_Build.png"
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
