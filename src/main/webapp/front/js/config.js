
var projectName = '忘忧小区物业管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '小区信息',
	url: './pages/xiaoquxinxi/list.html'
}, 
{
	name: '小区通知',
	url: './pages/xiaoqutongzhi/list.html'
}, 
{
	name: '房源信息',
	url: './pages/fangyuanxinxi/list.html'
}, 

{
	name: '住户交流',
	url: './pages/forum/list.html'
}, 
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssmqh048/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"小区信息","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息管理"},{"child":[{"buttons":["查看","删除","缴费通知"],"menu":"住户","menuJump":"列表","tableName":"zhuhu"}],"menu":"住户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"小区通知","menuJump":"列表","tableName":"xiaoqutongzhi"}],"menu":"小区通知管理"},{"child":[{"buttons":["查看","删除"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"},{"child":[{"buttons":["查看","删除","查看评论"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuanxinxi"}],"menu":"房源信息管理"},{"child":[{"buttons":["查看","审核","维修指派","删除"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"维修指派","menuJump":"列表","tableName":"weixiuzhipai"}],"menu":"维修指派管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"小区环境","menuJump":"列表","tableName":"xiaoquhuanjing"}],"menu":"小区环境管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"住户交流","tableName":"forum"}],"menu":"住户交流"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"小区信息列表","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息模块"},{"child":[{"buttons":["查看"],"menu":"小区通知列表","menuJump":"列表","tableName":"xiaoqutongzhi"}],"menu":"小区通知模块"},{"child":[{"buttons":["查看"],"menu":"房源信息列表","menuJump":"列表","tableName":"fangyuanxinxi"}],"menu":"房源信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","支付"],"menu":"缴费信息","menuJump":"列表","tableName":"jiaofeixinxi"}],"menu":"缴费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuanxinxi"}],"menu":"房源信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"报修信息","menuJump":"列表","tableName":"baoxiuxinxi"}],"menu":"报修信息管理"},{"child":[{"buttons":["查看"],"menu":"维修指派","menuJump":"列表","tableName":"weixiuzhipai"}],"menu":"维修指派管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"小区信息列表","menuJump":"列表","tableName":"xiaoquxinxi"}],"menu":"小区信息模块"},{"child":[{"buttons":["查看"],"menu":"小区通知列表","menuJump":"列表","tableName":"xiaoqutongzhi"}],"menu":"小区通知模块"},{"child":[{"buttons":["查看"],"menu":"房源信息列表","menuJump":"列表","tableName":"fangyuanxinxi"}],"menu":"房源信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"住户","tableName":"zhuhu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
