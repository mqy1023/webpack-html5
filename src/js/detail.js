import detail from '../style/css/detail.less';
import print from '../lib/printMsg.js';
const pagename = "菜品详情页!";
const dateTime = Date.now();
const {ua,language} = {ua:navigator.userAgent,language:navigator.language};
const log = text => {console.log(text);}
console.log(pagename + ' : ' + dateTime);
console.log(ua);
print.log('详情页');




