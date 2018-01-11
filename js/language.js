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
        "WBG":['SiC 宽禁带半导体','SiC WBG Semiconductor'],
        "power":['SiC 功率器件','SiC Power Device'],
        "gate":['SiC MOSFET栅极驱动电路','SiC MOSFET Gate Driver'],
        "IPM":['SiC 功率模块','SiC IPM SiC']
    },
    "product": {
        "1200V":['1200V碳化硅MOSFET产品','1200V SiC MOSFET'],
        "650V":['650V碳化硅MOSFET产品','650V SiC MOSFET'],
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

    "ad_PT": ['瞻芯电子致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Voluptua scripserit ' +
    'per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, ' +
    'sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. ' +
    'Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. ' +
    'Menandritemporibus an duo.'],

    "ad_App": ['瞻芯电子致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Voluptua scripserit ' +
    'per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, ' +
    'sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. ' +
    'Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. ' +
    'Menandritemporibus an duo.'],

    //首页行业应用图片说明文字
    "app_1" : ['新能源汽车','New Energy Automobile'],
    "app_2" : ['分布式能源','Distributed Energy'],
    "app_3" : ['轨道交通','Rail'],
    "app_4" : ['智能电网','Smart Power Grids'],
    "app_5" : ['充电桩','Charging Pile'],
    "app_6" : ['数据中心','Data Center'],

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
    "val-p3" : ['价值观：坚持以客户和市场为导向，以诚信、包容、专注、执着为工作理念，持续创新，放眼世界，以高质量的产品和服务永无止境地改善人类生活。','Corporate Values: focusing on customer demands and marketing-oriented applications; honest, open-minded, concentrated, persevere work ethics; continuous innovation, global mindset, to improve human life endlessly with high quality products and service.'],

    // technology 页面-宽禁带半导体
    "WBG-P1" : ['碳化硅半导体具有禁带宽度大，热导率高，击穿场强高等优良特性，正在成为新时代高压功率元器件的首选材料。','SIC is a "wide-bandgap" semiconductor and has very different physical properties from silicon. Single crystal silicon carbide (SIC) has many superior physical properties than single crystal silicon (SI), such as (1) about 10 times the electric field strength; (2) about 3 times higher thermal conductivity; (3) Times the band gap; (4) about double the saturation drift speed.'],

    // technology 页面-功率器件
    "power-p1" : ['在超越摩尔（more than moore）的平台上，硅功率器件逐渐接近性能极限。相对而言，碳化硅功率器件具有的高耐压、高频率和低开关损耗等特性优势，使其在别样摩尔（different from moore）的道路上崭露头角，更有望在高压大功率电子应用市场独占鳌头。','In theory, the operating temperature of SIC devices is 500 ° C or higher, and silicon devices can not. Silicon carbide thermal conductivity than copper thermal conductivity, the heat generated by the device will be passed quickly, which undoubtedly improve the flow through the device is very beneficial.'],
    "power-p2" : ['',''],

    // product页面-1200v
    "1200v-ca1" : ['1200v-IVCT-module1','1200v-IVCT-module1'],
    "1200v-ca2" : ['1200v-IVCT-module2','1200v-IVCT-module2'],
    "1200v-ca3" : ['1200v-IVCT-module3','1200v-IVCT-module3'],

    // product 页面-650v
    "650v-ca1" : ['650v-IVCT-module1','650v-IVCT-module1'],
    "650v-ca2" : ['650v-IVCT-module2','650v-IVCT-module2'],
    "650v-ca3" : ['650v-IVCT-module3','650v-IVCT-module3'],

    // product 页面-gate dirver
    "dirver-ca1" : ['dirver-IVCT-module1','dirver-IVCT-module1'],
    "dirver-ca2" : ['dirver-IVCT-module2','dirver-IVCT-module2'],
    "dirver-ca3" : ['dirver-IVCT-module3','dirver-IVCT-module3'],
};

var jobsData = {
    "job1" : {
        //招聘职位名称
        "jobN" :['版图设计工程师','Layout design engineer'],
        //招聘信息职位描述
        "jobD-p1" : ['负责高性能集成电路版图设计；','Physical design and layout of high performance power integrated circuits.'],
        "jobD-p2" : ['顶层版图布局规划以及芯片面积优化；','Top level layout floorplanning and die size optimization.'],
        "jobD-p3" : ['高效电路模块版图设计以及面积优化；','Cosft effective implementing of IC circuit blocks.'],
        "jobD-p4" : ['负责集成电路版图验证，确保DRC/LVS通过；','Physical layout verification including DRC/LVS,etc.'],
        "jobD-p5" : ['在设计和流片过程中，与IC设计工程师，工艺工程师以及工厂密切配合','Interfacting with circuit designers, process engineers and maks designers during product development.'],
        "jobD-p6" : ['整理总结项目及产品开发各个阶段的文档资料；',''],
        //招聘信息职位要求
        "jobR-p1" : ['态度严谨，上进心强；','Bachelor degree or above in EE，Microelectronics or related fields'],
        "jobR-p2" : ['电子、微电子或相关专业本科以上学历','Minimum 5 years of working experience of analog IC layout is preferred'],
        "jobR-p3" : ['5年及以上集成电路版图设计工作经验 ','Familiar with details of IC layout'],
        "jobR-p4" : ['熟悉集成电路工艺，半导体器件的版图要求；','Familiar with Cadence design environment'],
        "jobR-p5" : ['熟练使用主流EDA软件工具（Cadence），Linux操作熟练，有Skill脚本编程能力更佳','Good communication skills and cooperative spirits'],
        "jobR-p6" : ['具备良好的英文沟通能力和团队合作精神','IC layout experience in power IC area is preferred.'],
        "jobR-p7" : ['有电源IC相关的版图设计经验','']
    },
    "job2" : {
        //招聘职位名称
        "jobN" :['模拟IC设计工程师','Analog IC Design Engineer'],
        //招聘信息职位描述
        "jobD-p1" : ['1. 与系统、器件、封装工程师共同完成新产品定义和系统设计、系统仿真；',''],
        "jobD-p2" : ['2. 负责模块级和芯片级设计、仿真（模拟电路、数模混合的设计仿真），指导芯片版图设计；',''],
        "jobD-p3" : ['3. 与测试工程师沟通，制定标准格式的中测、成测规范；',''],
        "jobD-p4" : ['4. 与系统和应用工程师沟通，制定详细的系统应用测试计划；',''],
        "jobD-p5" : ['5. 与可靠性工程师沟通，完成芯片的可靠性试验；',''],
        "jobD-p6" : ['6. 负责产品的调试和失效分析；',''],
        "jobD-p7" : ['7. 整理总结项目及产品开发各个阶段的文档资料；',''],
        "jobD-p8" : ['8. 积极回应客户的反馈，支持配合客户需求；',''],
        "jobD-p9" : ['9. 密切关注和分析行业有竞争力芯片和相关技术发展趋势。',''],
        //招聘信息职位要求
        "jobR-p1" : ['1. 至少5年以上工业界模拟IC设计和流片经验；',''],
        "jobR-p2" : ['2. 能熟练设计常见的模拟和混合电路，包括signal/power amplifiers, LDO, charge pumps, bootstrap, comparators, bandgap references等；',''],
        "jobR-p3" : ['3. 精通各种半导体器件的物理特性和版图要求；',''],
        "jobR-p4" : ['4. 了解常见的工艺、设计、量产测试和系统应用上的问题；',''],
        "jobR-p5" : ['5. 有独立设计并大规模量产1个以上芯片产品的经验；',''],
        "jobR-p6" : ['6. 了解基本的开关电源电路拓扑；',''],
        "jobR-p7" : ['7. 有low side/high side或者隔离驱动电路设计经验者优先；',''],
        "jobR-p8" : ['8.有高压（600V或以上）IC设计、应用以及智能功率模块经验者优先。','']
    },
    "job3" : {
        //招聘职位名称
        "jobN" :['财务主管','Financial Officer'],
        //招聘信息职位描述
        "jobD-p1" : ['1. 负责填制的日常财务收支、账册、成本表、往来账；',''],
        "jobD-p2" : ['2. 负责建立和完善财务工作流程、规范和制度；',''],
        "jobD-p3" : ['3. 负责编制财务报表，并对接外部审计事务；',''],
        "jobD-p4" : ['4. 参与编制资金预算，拟订资金筹措和使用方案，提升资金使用效率；',''],
        "jobD-p5" : ['5. 负责编制财务分析报告，为公司提供决策依据；',''],
        "jobD-p6" : ['6. 负责筹划合理纳税，及纳税申报；',''],
        "jobD-p7" : ['7. 负责公司内控管理，参与审核重大经济合同，规避法规风险；',''],
        "jobD-p8" : ['8. 协助领导处理其他临时工作。',''],
        //招聘信息职位要求
        "jobR-p1" : ['1. 本科以上学历，经济管理、财会相关专业；',''],
        "jobR-p2" : ['2. 3年以上财会工作或1年以上主管会计工作经验；',''],
        "jobR-p3" : ['3. 熟悉财务相关法律法规、会计准则和企业内控制度；',''],
        "jobR-p4" : ['4. 熟悉科研型企业财税政策或相关经验者优先；',''],
        "jobR-p5" : ['5. 具有的财务信息统计、预测、分析能力；',''],
        "jobR-p6" : ['6. 计划与执行能力强，能快速响应；',''],
        "jobR-p7" : ['7. 熟练使用财务软件、OFFICE软件。','']
    },
    "job4" : {
        //招聘职位名称
        "jobN" :['电力电子测试助理（实习生）','Power Electronics Test Assistant (Intern)'],
        //招聘信息职位描述
        "jobD-p1" : ['1. 完成功率电子系统的参考设计、调试和验证；',''],
        "jobD-p2" : ['2. 完成功率器件动态及可靠性测试；',''],
        "jobD-p3" : ['3. 整理项目及产品开发期间的文档资料；',''],
        "jobD-p4" : ['4. 协助管理测试实验室；',''],
        //招聘信息职位要求
        "jobR-p1" : ['1. 研究生学历优先;',''],
        "jobR-p2" : ['2. 动手能力强，善于解决问题；',''],
        "jobR-p3" : ['3. 电力电子、电子信息相关专业；',''],
        "jobR-p4" : ['4. 熟悉MCU/DSP编程、Labview编程、PCB layout；',''],
        "jobR-p5" : ['5. 有AC/DC和DC-DC相关电路设计、模拟经历者优先；',''],
        "jobR-p6" : ['6. 有磁性元件设计经历者优先。','']
    }
    //例子
    // "job5" : {
    //     //招聘职位名称
    //     "jobN" :['',''],
    //     //招聘信息职位描述
    //     "jobD-p1" : ['',''],
    //     "jobD-p2" : ['',''],
    //     "jobD-p3" : ['',''],
    //     "jobD-p4" : ['',''],
    //     "jobD-p5" : ['',''],
    //     "jobD-p6" : ['',''],
    //     //招聘信息职位要求
    //     "jobR-p1" : ['',''],
    //     "jobR-p2" : ['',''],
    //     "jobR-p3" : ['',''],
    //     "jobR-p4" : ['',''],
    //     "jobR-p5" : ['',''],
    //     "jobR-p6" : ['',''],
    //     "jobR-p7" : ['','']
    // },


};

//了解更多
var more = ['了解更多','Learn More'];

//首页联系我们
var campnyInfo = {
    "add": ['上海市浦东新区南汇新城镇海洋一路333号8号楼3楼','Building 8-3F, No. 333, Ocean No. 1 Road, Nanhui New City Town, Pudong New District, Shanghai 201306, P.R.China'],
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
    "timeline-content-right-en" : ['Founded on Jul 17, 2017 in the dynamic new city, Lingang, Shanghai.']
    //左侧内容
    // "timeline-content-left-cn" : ['左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多5','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多3','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多1'],
    // "timeline-content-left-en" : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
};


//行业新闻
var newsData = {
    "news3" : {
        "caption-news" : ['IDT Introduces SiC Humidity Sensors','IDT Introduces SiC Humidity Sensors'],
        "p1" : ['Monday 20th November 2017','Monday 20th November 2017'],
        "p2" : ['Integrated Device Technology (IDT) has announced the addition of family of SiC-based relative humidity (RH) sensor chips to its portfolio of advanced sensor products. ','Integrated Device Technology (IDT) has announced the addition of family of SiC-based relative humidity (RH) sensor chips to its portfolio of advanced sensor products. '],
        "p3" : ['The IDT HS300x family of relative humidity sensors feature a ±1.5 percent RH accuracy and six-second response time (rated over a 20 percent to 80 percent RH range in still air and does not require airflow). Since humidity sensors consume the most power when they are taking a measurement, the fast response time to a stable measurement reduces the amount of sampling needed. This is especially important for battery-powered applications, where lower power consumption equates to longer battery life.','The IDT HS300x family of relative humidity sensors feature a ±1.5 percent RH accuracy and six-second response time (rated over a 20 percent to 80 percent RH range in still air and does not require airflow). Since humidity sensors consume the most power when they are taking a measurement, the fast response time to a stable measurement reduces the amount of sampling needed. This is especially important for battery-powered applications, where lower power consumption equates to longer battery life.'],
        "p4" : ['In addition to high-accuracy and fast response times, the HS300x family features excellent long-term stability of 0.1 percent RH per year as a result of a robust SiC construction and an innovative design. This improves useful lifetime and lowers its effective cost. ','In addition to high-accuracy and fast response times, the HS300x family features excellent long-term stability of 0.1 percent RH per year as a result of a robust SiC construction and an innovative design. This improves useful lifetime and lowers its effective cost. '],
        "p5" : ['IDT\'s humidity sensors are suitable for a wide range of applications, including measurement of water vapour content in medical oxygen, measurement of humidity in appliances such as refrigerators, as well as monitoring the humidity of air in industrial processes, climate control systems (HVAC), weather stations, and portable personal health devices.','IDT\'s humidity sensors are suitable for a wide range of applications, including measurement of water vapour content in medical oxygen, measurement of humidity in appliances such as refrigerators, as well as monitoring the humidity of air in industrial processes, climate control systems (HVAC), weather stations, and portable personal health devices.'],
        "p6" : ['"We\'re excited to add high-performance humidity sensors to our portfolio of industry-leading sensor products," said Sailesh Chittipeddi, executive vice president global operations and chief technology officer at IDT. "IDT\'s humidity sensors can be used alone or integrated with IDT\'s gas and flow sensors to provide a complete environmental sensing solution. These products each provide a compelling value proposition that, when coupled with IDT\'s long-standing reputation for quality and support, make IDT\'s products the preferred solution for many industrial, medical, and automotive applications."','"We\'re excited to add high-performance humidity sensors to our portfolio of industry-leading sensor products," said Sailesh Chittipeddi, executive vice president global operations and chief technology officer at IDT. "IDT\'s humidity sensors can be used alone or integrated with IDT\'s gas and flow sensors to provide a complete environmental sensing solution. These products each provide a compelling value proposition that, when coupled with IDT\'s long-standing reputation for quality and support, make IDT\'s products the preferred solution for many industrial, medical, and automotive applications."'],
        "p7" : ['The HS300x family consists of four devices – the HS3001, HS3002, HS3003, and HS3004 offering RH measurement accuracy of ±1.5 percent, ±1.8 percent, ±2.8 percent and ±3.8 percent, respectively. All devices feature an extremely low 1uA quiescent current for additional power savings, and an extra wide 5 percent to 95 percent sensing range for more precise control at the humidity extremes. The devices are offered in a compact 3.0 × 2.4 × 0.8 mm LGA package. The HS300x devices and evaluation boards are available now. ','The HS300x family consists of four devices – the HS3001, HS3002, HS3003, and HS3004 offering RH measurement accuracy of ±1.5 percent, ±1.8 percent, ±2.8 percent and ±3.8 percent, respectively. All devices feature an extremely low 1uA quiescent current for additional power savings, and an extra wide 5 percent to 95 percent sensing range for more precise control at the humidity extremes. The devices are offered in a compact 3.0 × 2.4 × 0.8 mm LGA package. The HS300x devices and evaluation boards are available now. '],
        "p8" : ['',''],
        "p9" : ['',''],
        "p10" : ['',''],
        "p11" : ['',''],
        "p12" : ['',''],
        "p13" : ['',''],
        "p14" : ['',''],
        "p15" : ['',''],
        "p16" : ['',''],
        "p17" : ['',''],
        "p18" : ['',''],
        "p19" : ['',''],
        "p20" : ['','']
    },
    "news2" : {
        "caption-news" : ['Navitas To Present Power Electronics Keynote','Navitas To Present Power Electronics Keynote'],
        "p1" : ['Thursday 23rd November 2017','Thursday 23rd November 2017'],
        "p2" : ['Navitas Semiconductor has announced that Stephen Oliver, vice president of sales and marketing, will deliver a keynote presentation titled, \'GaN Power ICs: Integration Drives Performance\' at the first annual Power Electronics Conference 2017 to be held Dec 5th in Munich, Germany. ','Navitas Semiconductor has announced that Stephen Oliver, vice president of sales and marketing, will deliver a keynote presentation titled, \'GaN Power ICs: Integration Drives Performance\' at the first annual Power Electronics Conference 2017 to be held Dec 5th in Munich, Germany. '],
        "p3" : ['The keynote will share new insights on how the industry’s first and only GaN power ICs create dramatic changes in speed, efficiency and densities for a broad range of power systems. ','The keynote will share new insights on how the industry’s first and only GaN power ICs create dramatic changes in speed, efficiency and densities for a broad range of power systems. '],
        "p4" : ['The one-day conference presents an interactive forum for wide bandgap manufacturers, partners, and customers to share expertise in accelerating adoption of new GaN and SiC devices.','The one-day conference presents an interactive forum for wide bandgap manufacturers, partners, and customers to share expertise in accelerating adoption of new GaN and SiC devices.'],
        "p5" : ['“After 40 years utilising slow and inefficient silicon devices with little change to circuit architectures, the power electronics industry is entering an exciting new era of new materials, new devices, new magnetics, new controllers and imaginative topologies", said Oliver. ','“After 40 years utilising slow and inefficient silicon devices with little change to circuit architectures, the power electronics industry is entering an exciting new era of new materials, new devices, new magnetics, new controllers and imaginative topologies", said Oliver. '],
        "p6" : ['“As the world’s first and only GaN power IC provider, Navitas looks forward to sharing proof points demonstrating how monolithic integration of power circuits - all in GaN - when combined with new resonant topologies leads to a dramatic increase in frequency and efficiency and a new generation of high-efficiency, high-density power converters".','“As the world’s first and only GaN power IC provider, Navitas looks forward to sharing proof points demonstrating how monolithic integration of power circuits - all in GaN - when combined with new resonant topologies leads to a dramatic increase in frequency and efficiency and a new generation of high-efficiency, high-density power converters".'],
        "p7" : ['The conference will be held at the Hilton Hotel at the Munich Airport in Germany on December 5th, 2017 from 9am to 5pm. Organised by Bodo’s Power Systems and ICC Media / AspenCore Europe, the conference will focus on GaN and SiC, with the inaugural theme \'Wide Band Gap is no Mystery\'. ','The conference will be held at the Hilton Hotel at the Munich Airport in Germany on December 5th, 2017 from 9am to 5pm. Organised by Bodo’s Power Systems and ICC Media / AspenCore Europe, the conference will focus on GaN and SiC, with the inaugural theme \'Wide Band Gap is no Mystery\'. '],
        "p8" : ['',''],
        "p9" : ['',''],
        "p10" : ['',''],
        "p11" : ['',''],
        "p12" : ['',''],
        "p13" : ['',''],
        "p14" : ['',''],
        "p15" : ['',''],
        "p16" : ['',''],
        "p17" : ['',''],
        "p18" : ['',''],
        "p19" : ['',''],
        "p20" : ['','']
    },
    "news1" : {
        "caption-news" : ['Efficient power electronics for hybrids and EVs ','Efficient power electronics for hybrids and EVs '],
        "p1" : ['04-Jun-2014 04:33 EDT','04-Jun-2014 04:33 EDT'],
        "p2" : ['Although the electrification of road transportation has improved overall energy efficiency, the ledger for hybrid and electric vehicles has always had a significant entry in the debit column that marks the large energy losses from the silicon-based power electronics. ','Although the electrification of road transportation has improved overall energy efficiency, the ledger for hybrid and electric vehicles has always had a significant entry in the debit column that marks the large energy losses from the silicon-based power electronics. '],
        "p3" : ['Take a hybrid car’s power control unit (PCU), which manages the flow of battery power to the motor for speed control and sends recovered braking energy to the battery for storage. A goodly portion of the strong currents and high voltages that pass through the silicon power transistors and diodes dissipates as heat, accounting for about a quarter of the vehicle’s total electrical power loss. That’s around a fifth of the loss that is associated with the power semiconductors alone.','Take a hybrid car’s power control unit (PCU), which manages the flow of battery power to the motor for speed control and sends recovered braking energy to the battery for storage. A goodly portion of the strong currents and high voltages that pass through the silicon power transistors and diodes dissipates as heat, accounting for about a quarter of the vehicle’s total electrical power loss. That’s around a fifth of the loss that is associated with the power semiconductors alone.'],
        "p4" : ['PCUs and other power devices suffer two kinds of operational losses; some occur during conduction, but most waste occurs when the current switches on and off. ','PCUs and other power devices suffer two kinds of operational losses; some occur during conduction, but most waste occurs when the current switches on and off. '],
        "p5" : ['Ever since Toyota engineers introduced the first Prius hybrid in the late 1990s, they have sought more efficient power electronics that they hoped would be based on new, low-loss semiconductors, but these have taken decades to materialize. ','Ever since Toyota engineers introduced the first Prius hybrid in the late 1990s, they have sought more efficient power electronics that they hoped would be based on new, low-loss semiconductors, but these have taken decades to materialize. '],
        "p6" : ['Silicon to silicon carbide','Silicon to silicon carbide'],
        "p7" : ['Recently, however, the automaker said that it is starting to convert the power-hungry silicon-based IC chips in its PCUs to more efficient devices made from silicon’s cousin, silicon carbide (SiC). These next-generation electronics run at higher temperatures, voltages, and switching frequencies, which can mean fewer energy losses, better performance, and greater efficiency.','Recently, however, the automaker said that it is starting to convert the power-hungry silicon-based IC chips in its PCUs to more efficient devices made from silicon’s cousin, silicon carbide (SiC). These next-generation electronics run at higher temperatures, voltages, and switching frequencies, which can mean fewer energy losses, better performance, and greater efficiency.'],
        "p8" : ['Power electronics devices using the SiC semiconductors could raise the fuel efficiency of hybrid vehicles by as much as 10%, Toyota claims.','Power electronics devices using the SiC semiconductors could raise the fuel efficiency of hybrid vehicles by as much as 10%, Toyota claims.'],
        "p9" : ['Integrated circuits that are fabricated on SiC substrates lose one-tenth less electrical power than their conventional silicon counterparts and can run at 10 times the drive frequency. The technology would also enable reductions of the size of future PCUs by as much as four-fifths. (For more information, see this video: http://www.youtube.com/watch?v=9FGSOK5l6s0.)','Integrated circuits that are fabricated on SiC substrates lose one-tenth less electrical power than their conventional silicon counterparts and can run at 10 times the drive frequency. The technology would also enable reductions of the size of future PCUs by as much as four-fifths. (For more information, see this video: http://www.youtube.com/watch?v=9FGSOK5l6s0.)'],
        "p10" : ['SiC power electronics could find use in the battery chargers on plug-in hybrids and electric vehicles, drivetrain systems, as well as inverters and dc-to-dc voltage conversion systems.','SiC power electronics could find use in the battery chargers on plug-in hybrids and electric vehicles, drivetrain systems, as well as inverters and dc-to-dc voltage conversion systems.'],
        "p11" : ['Since the early 1980s, Toyota Central R&D Labs has collaborated on SiC semiconductors with Denso Corp., the Toyota Group’s biggest parts supplier. In recent years, Denso has demonstrated production of 4-in (10.2-cm), then 6-in-diameter (15.2-cm-diameter) wafers of high-quality crystalline silicon carbide, one of the hardest materials in nature. The costly wafers are difficult to process because of the ceramic’s high hardness and temperature resistance, said company documents. ','Since the early 1980s, Toyota Central R&D Labs has collaborated on SiC semiconductors with Denso Corp., the Toyota Group’s biggest parts supplier. In recent years, Denso has demonstrated production of 4-in (10.2-cm), then 6-in-diameter (15.2-cm-diameter) wafers of high-quality crystalline silicon carbide, one of the hardest materials in nature. The costly wafers are difficult to process because of the ceramic’s high hardness and temperature resistance, said company documents. '],
        "p12" : ['SiC power semiconductors lose little power when switching on and off, which supports efficient current flow even at higher frequencies. This capability will allow engineers to miniaturize the coil and capacitor, which accounts for approximately 40% of the size of a current PCU.','SiC power semiconductors lose little power when switching on and off, which supports efficient current flow even at higher frequencies. This capability will allow engineers to miniaturize the coil and capacitor, which accounts for approximately 40% of the size of a current PCU.'],
        "p13" : ['Denso specialists are now perfecting the crystallization process and working to establish stable, high-yield processing to mass-produce even larger, high-quality SiC wafers. ','Denso specialists are now perfecting the crystallization process and working to establish stable, high-yield processing to mass-produce even larger, high-quality SiC wafers. '],
        "p14" : ['Efficient power chips','Efficient power chips'],
        "p15" : ['The new semiconductor power chips unveiled recently at the 2014 Automotive Engineering Exposition in Yokohama were a 5-mm (0.2-in) square SiC transistor and 6-mm (0.24-in) square SiC diode. From silicon power chip designs, the ICs borrowed a trench chip structure with a buried vertical gate electrode.','The new semiconductor power chips unveiled recently at the 2014 Automotive Engineering Exposition in Yokohama were a 5-mm (0.2-in) square SiC transistor and 6-mm (0.24-in) square SiC diode. From silicon power chip designs, the ICs borrowed a trench chip structure with a buried vertical gate electrode.'],
        "p16" : ['Toyota reported that it has already achieved a 5% improvement in fuel efficiency in test vehicles (JC08 test cycle) using the new technology, and it expects to begin test-driving prototypes in vehicles on public roads in Japan within a year. In December of last year, the company completed a clean room at its Hirose Plant, an R&D facility in Japan that is dedicated to development of SiC semiconductors.','Toyota reported that it has already achieved a 5% improvement in fuel efficiency in test vehicles (JC08 test cycle) using the new technology, and it expects to begin test-driving prototypes in vehicles on public roads in Japan within a year. In December of last year, the company completed a clean room at its Hirose Plant, an R&D facility in Japan that is dedicated to development of SiC semiconductors.'],
        "p17" : ['Company representatives said it is aiming to implement SiC in hybrids by lowering costs to the same level as the current silicon semiconductors through mass production. The aim is to commercialize the technology by 2020.','Company representatives said it is aiming to implement SiC in hybrids by lowering costs to the same level as the current silicon semiconductors through mass production. The aim is to commercialize the technology by 2020.'],
        "p18" : ['Wide bandgap semiconductors','Wide bandgap semiconductors'],
        "p19" : ['Silicon semiconductors’ use in power electronic devices is coming under pressure from new wide bandgap (WBG) semiconductors such as SiC and speedy but costly gallium arsenide. ','Silicon semiconductors’ use in power electronic devices is coming under pressure from new wide bandgap (WBG) semiconductors such as SiC and speedy but costly gallium arsenide. '],
        "p20" : ['The term “bandgap” refers to the amount of energy required to make electrons jump off their atoms and begin conducting electricity through a material. Conductors such as copper often have no bandgap, which makes them good conductors. Silicon-based semiconductors feature narrow bandgaps, and most insulating materials have very wide bandgaps. A semiconductor with a wider bandgap enable electronics devices to run hotter at higher voltages and switching frequencies. ','The term “bandgap” refers to the amount of energy required to make electrons jump off their atoms and begin conducting electricity through a material. Conductors such as copper often have no bandgap, which makes them good conductors. Silicon-based semiconductors feature narrow bandgaps, and most insulating materials have very wide bandgaps. A semiconductor with a wider bandgap enable electronics devices to run hotter at higher voltages and switching frequencies. '],
        "p21" : ['Up to now, SiC commercialization has been hampered by the need to remove crystal defects from the extremely hard, temperature-resistant ceramic. Apart from crystal quality, problems with the interface between the SiC and silicon dioxide have slowed the development of SiC-based power MOSFETs (metal oxide semiconductor field-effect transistors), though nitriding treatments seem to have helped. The new SiC chips are said to be robust and reliable.','Up to now, SiC commercialization has been hampered by the need to remove crystal defects from the extremely hard, temperature-resistant ceramic. Apart from crystal quality, problems with the interface between the SiC and silicon dioxide have slowed the development of SiC-based power MOSFETs (metal oxide semiconductor field-effect transistors), though nitriding treatments seem to have helped. The new SiC chips are said to be robust and reliable.'],
        "p22" : ['Growing supplier network','Growing supplier network'],
        "p23" : ['The biggest obstacle to adoption is high costs. SiC MOSFETs cost from 10 to 15 times more than silicon MOSFETs, according to an analysis conducted in 2013 by IMS Research (part of IHS), a market research firm based in the U.K. Beyond the processing problems, the report also cited the industry’s reluctance to change because the conversion to SiC is not a drop-in swap for silicon. Nevertheless, the IMS study predicted that sales of SiC PCUs in hybrids and EVs would start picking up by 2016 and would constitute a $200-million market by 2022. ','The biggest obstacle to adoption is high costs. SiC MOSFETs cost from 10 to 15 times more than silicon MOSFETs, according to an analysis conducted in 2013 by IMS Research (part of IHS), a market research firm based in the U.K. Beyond the processing problems, the report also cited the industry’s reluctance to change because the conversion to SiC is not a drop-in swap for silicon. Nevertheless, the IMS study predicted that sales of SiC PCUs in hybrids and EVs would start picking up by 2016 and would constitute a $200-million market by 2022. '],
        "p24" : ['Other SiC device makers and developers include Cree, Danfoss, Fairchild, Fuji Electric, GeneSiC Semiconductor, Global Power Device Co., Infineon, Microsemi, Mitsubishi Electric, Rohm Semiconductor, Renesas, Semikron, ST, United Silicon Carbide Inc., and Vincotech.','Other SiC device makers and developers include Cree, Danfoss, Fairchild, Fuji Electric, GeneSiC Semiconductor, Global Power Device Co., Infineon, Microsemi, Mitsubishi Electric, Rohm Semiconductor, Renesas, Semikron, ST, United Silicon Carbide Inc., and Vincotech.'],
        "p25" : ['The problem of inefficient power electronics extends way beyond the automotive industry; the U.S. Department of Energy projects that power electronics will consume a staggering 80% of all electrical energy by 2030. ','The problem of inefficient power electronics extends way beyond the automotive industry; the U.S. Department of Energy projects that power electronics will consume a staggering 80% of all electrical energy by 2030. '],
        "p26" : ['In January, a DOE-supported research center devoted to WBG technology, the Next Generation Power Electronics National Manufacturing Innovation Institute, was established at North Carolina State University. The institute, funded by a consortium of businesses and universities, has a mandate to develop “the next generation of energy-efficient, high-power electronic chips and devices by making wide bandgap semiconductor technologies cost-competitive with current silicon-based power electronics in the next five years.”','In January, a DOE-supported research center devoted to WBG technology, the Next Generation Power Electronics National Manufacturing Innovation Institute, was established at North Carolina State University. The institute, funded by a consortium of businesses and universities, has a mandate to develop “the next generation of energy-efficient, high-power electronic chips and devices by making wide bandgap semiconductor technologies cost-competitive with current silicon-based power electronics in the next five years.”'],
        "p27" : ['Meanwhile, the Japanese government also considers advanced SiC power semiconductors to be a high priority; it currently funds a joint industry and university R&D program that includes Toyota, Honda, and Nissan.','Meanwhile, the Japanese government also considers advanced SiC power semiconductors to be a high priority; it currently funds a joint industry and university R&D program that includes Toyota, Honda, and Nissan.']
    },
//    例子
//     "news0" : {
//         "caption-news" : ['',''],
//         "p1" : ['',''],
//         "p2" : ['',''],
//         "p3" : ['',''],
//         "p4" : ['',''],
//         "p5" : ['',''],
//         "p6" : ['',''],
//         "p7" : ['',''],
//         "p8" : ['',''],
//         "p9" : ['',''],
//         "p10" : ['',''],
//         "p11" : ['',''],
//         "p12" : ['',''],
//         "p13" : ['',''],
//         "p14" : ['',''],
//         "p15" : ['',''],
//         "p16" : ['',''],
//         "p17" : ['',''],
//         "p18" : ['',''],
//         "p19" : ['',''],
//         "p20" : ['','']
//     }
};
























