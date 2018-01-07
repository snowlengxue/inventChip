/* ==================================================
  首页
  ================================================== */

var title = ['上海瞻芯电子科技有限公司','InventChip Technology Co.,Ltd.'];
var cn = ['中文','中文'];
var en = ['English','English'];
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
        "nav_join" : ['招聘信息','Join us'],
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
    "ad_inventChip": ['上海瞻芯电子科技有限公司——位于东海之滨，滴水湖畔的临港科技城园区——是一家由海归博士' +
    '领衔的高科技初创企业。成立于2017年7月17日，汇聚了海内外资深的工艺器件、电路设计、系统应用和市场推广方面核心成员。', 'A VC' +
    ' funded, high profile startup with a core team covering process, device, IC design, system & ' +
    'application, and marketing. Founded on Jul 17, 2017 in the dynamic new city, Lingang, Shanghai.'],

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
    "app_8" : ['新能源','New Energy'],
    //招聘信息标题
    "jobD" : ['职位描述：','Description:'],
    "jobR" : ['职位要求：','Requirements:'],
    "jobA" : ['工作地点：','Workplace:'],
    "resume" : ['简历投递：','Submit Resume:'],

    //about页面-公司简介
    "pro-p1" : ['上海瞻芯电子科技有限公司——位于东海之滨，滴水湖畔的临港科技城园区——是一家由海归博士领衔的高科技初创企业。成立于' +
    '2017年7月17日，汇聚了海内外资深的工艺器件、电路设计、系统应用和市场推广方面核心成员。','A VC funded, high profile startup ' +
    'with a core team covering process, device, IC design, system & application, and marketing. Founded on Jul 17, ' +
    '2017 in the dynamic new city, Lingang, Shanghai. '],

    //about页面-总经理致辞
    "spe-p1" : ['上海瞻芯电子科技有限公司是一家由海归博士领衔的高科技初创企业。成立于2017年7月17日，汇聚了海内外资深的工艺器件、电路设计、系统应用和市场推广方面核心成员。瞻芯电子致力于开发碳化硅基功率集成电路和应用模块的产品。','A VC funded, high profile startup with a core team covering process, device, IC design, system & application, and marketing. Founded on Jul 17, 2017 in the dynamic new city, Lingang, Shanghai. InventChip dedicated to develop high performance low cost SiC power semiconductor and module products; to enable  minimization, higher efficiency, and lighter weight of  power converter and inverter system with our turn-key semiconductor solutions.'],
    "spe-p2" : ['瞻芯电子依托自身技术积累，紧跟国内新能源产业的步伐，通过自主研发、产学研合作与国际化合作相结合的方式，积极布局新能源业务。','InventChip based on its own technology accumulation, closely follow the pace of the domestic new energy industry, Zhanxin Electronics actively distributes its new energy business through a combination of independent R & D, industry-university-research cooperation and international cooperation.'],
    "spe-p3" : ['当今社会新能源已成为全世界共同关注的话题，瞻芯电子将贯彻以人才、技术为核心、社会需求为导向、产品质量为根本、优质服务为保证的理念，为电源和电驱动系统的小型化、高效化和轻量化，提供完整的系统应用解决方案。','Today\'s new energy sources in society has become a topic of common concern throughout the world. As the core concept of Talent, Technology and Social Needs, product quality as the fundamental and quality service as the guarantee, Improve efficiency and reduce weight and provide a complete system application solution.'],

    //about页面-价值观
    "val-p1" : ['使命：致力于开发碳化硅基功率集成电路和应用模块的产品，为电源和电驱动系统的小型化、高效化和轻量化，提供完整的系统应用解决方案。','Mission: ' +
    'to develop high performance low cost SiC power semiconductor and module products; to enable  minimization, higher efficiency, and lighter ' +
    'weight of  power converter and inverter system with our turn-key semiconductor solutions.'],
    "val-p2" : ['愿景： 以宽禁带半导体对功率器件的革新影响为契机，从Fabless发展成为世界一流的高性能功率和模拟电路及解决方案的IDM。','Vision: starting from Fabless while aiming to be the world class IDM focusing on high performance power and analog semiconductors by embracing opportunities of disruptive impact of WBG semiconductor power devices. '],
    "val-p3" : ['价值观：坚持以客户和市场为导向，以诚信、包容、专注、执着为工作理念，持续创新，放眼世界，以高质量的产品和服务永无止境地改善人类生活。','\tCorporate Values: focusing on customer demands and marketing-oriented applications; honest, open-minded, concentrated, persevere work ethics; continuous innovation, global mindset, to improve human life endlessly with high quality products and service.']
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

/* ==================================================
    关于我们
  ================================================== */
//时间轴

var timelineData = {

    //日期不分中英文
    // 例子："timeline-day" : ['7','5','4','3','2','1'],
    "timeline-day" : ['17'],
    // 例子："timeline-date" : ['2017/7/17','2017/5/20','2017/4/20','2017/3/20','2017/2/20','2017/1/20'],
    "timeline-date" : ['2017/7/17'],
    //月份不分左右侧
    //例子： "timeline-month-cn" : ['6月','5月','4月','3月','2月','1月'],
    "timeline-month-cn" : ['7月'],
    //例子： "timeline-month-en" : ['JUN','MAY','APR','MAR','FEB','JAN'],
    "timeline-month-en" : ['JUL'],
    //右侧标题
    // 例子： "timeline-cap-right-cn" : ['右侧大事记6','右侧大事记4','右侧大事记2'],
    "timeline-cap-right-cn" : ['上海瞻芯电子科技有限公司成立'],
    // 例子： "timeline-cap-right-en" : ['RIGHT6','RIGHT4','RIGHT2'],
    "timeline-cap-right-en" : ['Founded'],
    //左侧标题
    // "timeline-cap-left-cn" : ['左侧大事记5','左侧大事记3','左侧大事记1'],
    // "timeline-cap-left-en" : ['LEFT5','LEFT3','LEFT1'],
    //右侧内容
    //例子： "timeline-content-right-cn" : ['右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多6','右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多4','右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多2'],
    "timeline-content-right-cn" : ['上海瞻芯电子科技有限公司成立于2017年7月17日，位于东海之滨，滴水湖畔的临港科技城园区，是一家由海归博士领衔的高科技初创企业。'],
    // 例子："timeline-content-right-en" : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    "timeline-content-right-en" : ['Founded on Jul 17, 2017 in the dynamic new city, Lingang, Shanghai.'],
    //左侧内容
    // "timeline-content-left-cn" : ['左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多5','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多3','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多1'],
    // "timeline-content-left-en" : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
};

























