/**
 * Created by seven on 2017/4/20.
 */
var iScale = 1 / window.devicePixelRatio
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + ',user-scalable=no"/>');
var iWidth = document.documentElement.clientWidth
document.getElementsByTagName('html')[0].style.fontSize = iWidth / 54 + 'px'
