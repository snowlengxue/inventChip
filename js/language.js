var title = ['上海瞻芯电子科技有限公司','InventChip Technology Co.,Ltd.'];
var cn = ['中文','Cn'];
var en = ['英文','En'];
var frontPage = ['首页','Home'];
//首页hero标题
var hero_caption = ['电源和电驱动半导体解决方案','Power and Electrically Driven Semiconductior Solutions'];
var hero_subhead = ['我们提供以新技术为核心的，集成电路和应用模块产品','We provide integrated circuit and application module products with new technologies.'];
var hero_getStarted = ['了解详情','Get Started Now'];

//导航栏&首页大标题
var navData = {
    "nav": {
        "company":['关于我们','Company'],
        "technology" : ['技术背景','Technology'],
        "product" : ['产品','Product'],
        "application" : ['行业应用','Application'],
        "join" : ['招聘信息','Join us'],
        "nav_contact" : ['联系我们','Contact us']
    },
    "company": {
        "profile":['公司简介','Profile'],
        "speech":['总经理致辞','President speech'],
        "values":['使命，愿景和价值观','Mission, Vision, Values'],
        "org":['组织架构','Organization Chart'],
        "events":['公司进程','Events'],
        "news":['行业信息','More news']
    },
    "technology": {
        "WBG":['宽禁带半导体','WBG semiconductor'],
        "power":['功率器件','SiC power device SiC'],
        "gate":['门驱动电路','SiC gate driver SiC'],
        "IPM":['功率模块','SiC IPM SiC']
    },
    "product": {
        "1200V":['1200V碳化硅MOSFET产品','1200V Carborundum MOSFET'],
        "650V":['650V碳化硅MOSFET产品','650V Carborundum MOSFET'],
        "gateDriver":['驱动器','Low Side Gate Driver']
    },
    "h2Caption": {
        "captionInventchip":['关于瞻芯','About InventChip'],
        "captionPT":['技术产品','Technology & Product'],
        "captionApplication":['行业应用','Application'],
        "captionJoin":['招聘信息','Join Us'],
        "captionContact":['联系我们','Contact Us']
    }
};

var adwordsData = {
    //首页副标题
    "ad_inventChip": ['inventChip公司致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Voluptua scripserit ' +
    'per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, ' +
    'sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. ' +
    'Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. ' +
    'Menandritemporibus an duo.'],

    "ad_PT": ['productTechnology公司致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Voluptua scripserit ' +
    'per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, ' +
    'sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. ' +
    'Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. ' +
    'Menandritemporibus an duo.'],

    "ad_App": ['Application公司致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Voluptua scripserit ' +
    'per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, ' +
    'sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. ' +
    'Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. ' +
    'Menandritemporibus an duo.'],

    //首页行业应用图片说明文字
    "app_1" : ['新能源汽车','New Energy Automobile'],
    "app_2" : ['新能源发电','New Energy Power Generation'],
    "app_3" : ['轨道交通','Railway Traffic'],
    "app_4" : ['智能电网','Smart Power Grids'],
    "app_5" : ['节能环保','Energy Conservation'],
    "app_6" : ['轨道交通','Railway Traffic'],
    "app_7" : ['新能源汽车','New Energy Automobile'],
    "app_8" : ['新能源','New Energy']
};

var jobsData = {
    //招聘职位名称
    "jobN" : {
        "jobN1" : ['电子工程师1','Electronic Engineer1'],
        "jobN2" : ['电子工程师2','Electronic Engineer2'],
        "jobN3" : ['电子工程师3','Electronic Engineer3'],
        "jobN4" : ['电子工程师4','Electronic Engineer4']
    },

    //招聘信息职位描述
    "jobD" : {
        "jobD1" : ['电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位' +
        '描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述' +
        '电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobD2" : ['电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位' +
        '描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述' +
        '电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobD3" : ['电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位' +
        '描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述' +
        '电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobD4" : ['电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位' +
        '描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述' +
        '电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述电子工程师职位描述','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.']
    },
    //招聘信息职位要求
    "jobR" : {
        "jobR1" : ['电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobR2" : ['电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobR3" : ['电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.'],
        "jobR4" : ['电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求电子工程师职位要求' +
        '电子工程师职位要求电子工程师职位要求','Description of the position of ' +
        'electronic engineer,Description of the position of electronic engineer,Description of the position of electronic ' +
        'engineer,Description of the position of electronic engineer,Description of the position of electronic engineer,D' +
        'escription of the position of electronic engineer,Description of the position of electronic engineer,Description ' +
        'of the position of electronic engineerDescription of the position of electronic engineer,Description of the position' +
        ' of electronic engineerDescription of the position of electronic engineerDescription of the position of ' +
        'electronic engineer.']
    }
}

//了解更多
var more = ['了解更多','Learn More'];

//首页联系我们
var campnyInfo = {
    "add": ['上海市浦东新区南汇新城镇海基六路218弄15号楼304室','Suite 304, Building 15, Lane 218, Haiji No.6 Road, Pudong New District, Shanghai 201306, P.R. China'],
    "tel": '+86 021-2093 6199',
    "email": 'inventchip@inventchip.com.cn'
};




























