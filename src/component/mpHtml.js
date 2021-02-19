import {parse} from "node-html-parser";

export function tagStyle(key) {
  let base = {
    a: 'color:#0645ad;', // a 标签默认为红色.
    td: 'display:inline-block',
    th: 'display:inline-block',
    span: 'display: inline-block',
    ul: 'text-align:center;vertical-align:center;',
    li: 'display:inline-block',
    b: 'display:inline-block',
  };

  if (key == 'Template:Mainmenu') {
    base.p = 'display:inline-block';
    return base
  } else {
    return base
  }
}

function normalize(urlStr) {
  let cb = urlStr.match(/cb=(\w+)/)
  if(cb) {
    urlStr = urlStr.replace(/\/revision\/.*$/, '');
    urlStr = urlStr.replace(/\/zh\//, '/__cb' + cb[1] + '/');
    urlStr = urlStr.replace(/\/dont-starve-game\//, '/dont-starve-game/zh/')
    return urlStr;
  } else {
    return urlStr
  }
}

export function bleach(raw) {
  let content = parse(raw);
  console.log(content);
  content.querySelectorAll('.mw-editsection').forEach((n, i) => {
    n.remove();
  });

  content.querySelectorAll('.tright').forEach((n, i) => {
    n.remove();
  });

  content.querySelectorAll('.wikia-gallery').forEach((n, i)=>{
    // console.log(n)
    //n.parentNode.remove();
    n.remove();
  });

  content.querySelectorAll('.mw-headline').forEach((n, i)=>{
    if(n.id == '.E7.95.AB.E5.BB.8A' || n.id == '.E7.94.BB.E5.BB.8A' || n.id == 'Gallery') {
      n.remove();
    }
  });

  content.querySelectorAll('.DSWHoverTab').forEach((n, i) => {
    n.remove();
  });

  content.querySelectorAll('noscript').forEach((n, i) => {
    n.remove();
  });

  content.querySelectorAll('img').forEach((n, i) => {
    if(n.rawAttributes['data-src']) {
      //str.match(/cb=(\w+)/)
      //str.match(/path-prefix=(\w+)/) zh
      n.setAttribute('data-src', normalize(n.rawAttributes['data-src']))
      n.setAttribute('src', normalize(n.rawAttributes['data-src']))
    } else if(n.getAttribute('src')) {
      n.setAttribute('data-src', normalize(n.getAttribute('src')))
      n.setAttribute('src', normalize(n.getAttribute('src')))
    }
  });

  // content.querySelectorAll('p').forEach((n, i) => {
  //   if (n.innerText.indexOf('本文或部分尚未完全翻译成中文') >= 0) {
  //     n.remove();
  //   } else if (n.innerText.indexOf('不完整的翻译') >= 0) {
  //     n.remove();
  //   }
  // });

  // content.querySelectorAll('div').forEach((n, i) => {
  //   if (n.innerText.indexOf('幫助我們來翻譯這頁面') >= 0) {
  //     n.remove();
  //   } else if (n.innerText.indexOf('不完整的翻译') >= 0) {
  //     n.remove();
  //   }
  // });

  return content.toString();
}
