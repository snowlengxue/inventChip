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
        "news":['行业信息','More news'],
        "links":['行业专业网站','Useful Web Links']
    },
    "technology": {
        "WBG":['SiC 宽禁带半导体','SiC WBG Semiconductor'],
        "power":['SiC 功率器件','SiC Power Device'],
        "gate":['SiC MOSFET栅极驱动电路','SiC MOSFET Gate Driver'],
        "IPM":['SiC 功率模块','SiC IPM SiC']
    },
    "product": {
        "1200V":['1200V SiC MOSFET产品','1200V SiC MOSFET'],
        "650V":['650V SiC MOSFET产品','650V SiC MOSFET'],
        "gateDriver":['SiC MOSFET栅极驱动电路','SiC MOSFET Gate Driver']
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
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Develop high performance low cost SiC power ' +
    'semiconductor and module products; to enable minimization, higher efficiency, and lighter weight of power converter' +
    ' and inverter system with our turn-key semiconductor solutions.'],

    "ad_App": ['瞻芯电子致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品致力于开发以新型功率器件为核心的高性价比功率集成电路和应用模块产品，' +
    '为电源和电驱动系统的小型化、高效化和轻量化提供完整的半导体解决方案。', 'Develop high performance low cost SiC power ' +
    'semiconductor and module products; to enable minimization, higher efficiency, and lighter weight of power converter' +
    ' and inverter system with our turn-key semiconductor solutions.'],

    //首页行业应用图片说明文字
    "app_1" : ['新能源汽车','New Energy Automobile'],
    "app_2" : ['分布式能源','Distributed Energy'],
    "app_3" : ['轨道交通','Rail Transport'],
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

    //technology 页面 栅极驱动电路
    "gatedriver-p1": ['智能驱动电路高度集成了各功能模块，具有过压、过流、过温保护及软关断等特性优势。对比早期用分立器件搭配碳化硅MOSFET的应用方案，能够整体提高应用方案的可靠性，并大幅降低开关损耗。',''],

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
        "jobN" :['功率器件测试助理','Power Device Test Assistant'],
        //招聘信息职位描述
        "jobD-p1" : ['1.功率器件晶圆级的静态、动态、可靠性测试表征；',''],
        "jobD-p2" : ['2.功率器件封装级的静态、动态、可靠性测试表征；',''],
        "jobD-p3" : ['3.整理项目及产品开发期间的文档资料；',''],
        "jobD-p4" : ['4.协助管理测试实验室；',''],
        //招聘信息职位要求
        "jobR-p1" : ['1.研究生学历优先；',''],
        "jobR-p2" : ['2.动手能力强，善于解决问题；',''],
        "jobR-p3" : ['3.微电子、半导体物理、光电子、或其它电子类、材料学类相关专业；',''],
        "jobR-p4" : ['4.有物理类实验室项目经历、电子器件测试、电子仪器设备操作经历者优先。','']
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
        "jobR-p8" : ['8. 有高压（600V或以上）IC设计、应用以及智能功率模块经验者优先。','']
    },
    // "job3" : {
    //     //招聘职位名称
    //     "jobN" :['财务主管','Financial Officer'],
    //     //招聘信息职位描述
    //     "jobD-p1" : ['1. 负责填制的日常财务收支、账册、成本表、往来账；',''],
    //     "jobD-p2" : ['2. 负责建立和完善财务工作流程、规范和制度；',''],
    //     "jobD-p3" : ['3. 负责编制财务报表，并对接外部审计事务；',''],
    //     "jobD-p4" : ['4. 参与编制资金预算，拟订资金筹措和使用方案，提升资金使用效率；',''],
    //     "jobD-p5" : ['5. 负责编制财务分析报告，为公司提供决策依据；',''],
    //     "jobD-p6" : ['6. 负责筹划合理纳税，及纳税申报；',''],
    //     "jobD-p7" : ['7. 负责公司内控管理，参与审核重大经济合同，规避法规风险；',''],
    //     "jobD-p8" : ['8. 协助领导处理其他临时工作。',''],
    //     //招聘信息职位要求
    //     "jobR-p1" : ['1. 本科以上学历，经济管理、财会相关专业；',''],
    //     "jobR-p2" : ['2. 3年以上财会工作或1年以上主管会计工作经验；',''],
    //     "jobR-p3" : ['3. 熟悉财务相关法律法规、会计准则和企业内控制度；',''],
    //     "jobR-p4" : ['4. 熟悉科研型企业财税政策或相关经验者优先；',''],
    //     "jobR-p5" : ['5. 具有的财务信息统计、预测、分析能力；',''],
    //     "jobR-p6" : ['6. 计划与执行能力强，能快速响应；',''],
    //     "jobR-p7" : ['7. 熟练使用财务软件、OFFICE软件。','']
    // },
    // "job3" : {
    //         //招聘职位名称
    //         "jobN" :['瞻芯电子实习计划1-功率变换器数据检测和传输','Internship Program 1 - Power Converter Data Detection and Transmission'],
    //         //招聘信息职位描述
    //         "jobD-p1" : ['1. 用DSP （TI TSP  F28004x ） 检测 boost功率变换器',''],
    //         "jobD-p2" : ['2. 检测參数：电感电流， MOSFET 温度，MOSFET动态电流和管压降等',''],
    //         "jobD-p3" : ['3. 用 DSP SPI口和Ethernet 芯片通讯',''],
    //         "jobD-p4" : ['4. PC与Ethernet之间隔离通讯',''],
    //         "jobD-p5" : ['5. 用PC进行多路数值的采集',''],
    //         //招聘信息职位要求
    //         "jobR-p1" : ['1. 学习勤奋，成绩优异；',''],
    //         "jobR-p2" : ['2. 有C语言和 TI DSP 基础；',''],
    //         "jobR-p3" : ['3. 动手能力强；',''],
    //         "jobR-p4" : ['4. 有团队精神，善于沟通；',''],
    //         "jobR-p5" : ['5. 有良好的英文读写能力；',''],
    //         "jobR-p6" : ['6. 每周至少工作2天。','']
    //     },
    // "job4" : {
    //     //招聘职位名称
    //     "jobN" :['瞻芯电子实习计划2-功率器件加热板的恒温控制','Internship Plan 2 - Thermostatic Control of Power Device Heating Plates'],
    //     //招聘信息职位描述
    //     "jobD-p1" : ['1. 用DSP （TI TSP  F28004x ）对功率器件加热板的温度进行闭环控制；',''],
    //     "jobD-p2" : ['2. 用DSP 的ADC检测加热板的温度；',''],
    //     "jobD-p3" : ['3. 用DSP 的PWM控制加热电阻的输出功率；',''],
    //     "jobD-p4" : ['4. 用DSP 的PWM控制风扇的转速；',''],
    //     "jobD-p5" : ['5. 用PI闭环控制对加热板的温度进行恒温控制。',''],
    //     //招聘信息职位要求
    //     "jobR-p1" : ['1. 研究生学历优先;',''],
    //     "jobR-p2" : ['2. 动手能力强，善于解决问题；',''],
    //     "jobR-p3" : ['3. 电力电子、电子信息相关专业；',''],
    //     "jobR-p4" : ['4. 熟悉MCU/DSP编程、Labview编程、PCB layout；',''],
    //     "jobR-p5" : ['5. 有AC/DC和DC-DC相关电路设计、模拟经历者优先；',''],
    //     "jobR-p6" : ['6. 有磁性元件设计经历者优先。','']
    // },
    "job5" : {
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
    },
    // "job6" : {
    //     //招聘职位名称
    //     "jobN" :['工艺整合工程师（驻厂）','Process Integration Engineer (Resident)'],
    //     //招聘信息职位描述
    //     "jobD-p1" : ['1 公司产品开发阶段：',''],
    //     "jobD-p2" : ['1) 协助项目主管制定工艺参数规范，与Fab厂的相关模组合作，以达成所制定工艺参数规范；',''],
    //     "jobD-p3" : ['2) 制定流片计划，跟踪在线流片情况，协助Fab厂处理所负责工艺的在线异常情况；',''],
    //     "jobD-p4" : ['3) 统计在线所检测各项参数，为最后工艺的定型提供准确的数据参考。',''],
    //     "jobD-p5" : ['4) 协助项目主管制定PCM测试计划；',''],
    //     "jobD-p6" : ['2 公司产品量产阶段：',''],
    //     "jobD-p7" : ['与Fab厂的相关部门保持沟通，协助Fab厂解决在线异常，统计好关键在线参数的CP/CPK，统计PCM参数，及时发现异常情况。',''],
    //     //招聘信息职位要求
    //     "jobR-p1" : ['1. 至少5年工作经历，2年以上Fab厂的工作经验；',''],
    //     "jobR-p2" : ['2. 微电子、物理、材料等相关专业；',''],
    //     "jobR-p3" : ['3. 英语听说读写能力良好；',''],
    //     "jobR-p4" : ['4. 熟悉半导体制造工艺流程，熟悉MOSFET器件原理；',''],
    //     "jobR-p5" : ['5. 具备良好团队精神、工作主动性强，承压能力强；',''],
    //     "jobR-p6" : ['6. 优秀的计划、执行和分析总结能力；',''],
    //     "jobR-p7" : ['7. 具备优秀的项目管理、驱动能力。','']
    // },
    "job7" : {
        //招聘职位名称
        "jobN" :['半导体测试工程师','Semiconductor test engineer'],
        //招聘信息职位描述
        "jobD-p1" : ['1. 与定义、设计、器件和应用工程师合作，理解产品定义，提供可测试性设计建议，制定测试计划细节；',''],
        "jobD-p2" : ['2.负责测试系统硬件开发， 包括PCB设计，元器件选型，布板以及调试，协调相关硬件的生产制造过程；',''],
        "jobD-p3" : ['3. 负责开发自动测试机台（ATE）的测试系统软件，调试以及跨平台程序移植；',''],
        "jobD-p4" : ['4.与设计、工艺和系统应用工程师沟通，按照测试计划要求，按时完成产品自动测试，及时分析数据，反馈测试中发现的产品性能信息；',''],
        "jobD-p5" : ['5. 与可靠性工程师沟通，完成可靠性相关测试；',''],
        "jobD-p6" : ['6. 协助设计和工艺工程师进行产品的调试和失效分析；',''],
        "jobD-p7" : ['7.与封测工厂沟通相应的产品测试方案，确保方案合规，产品质量符合要求，并优化测试成本；',''],
        "jobD-p8" : ['8. 整理总结项目及产品开发各个阶段的文档资料；维护量产数据，支持产品质量和良率分析；',''],
        "jobD-p9" : ['9. 积极回应客户的反馈，支持配合客户测试需求；',''],
        "jobD-p10" : ['10. 密切关注和分析业内测试相关技术发展趋势。',''],
        //招聘信息职位要求
        "jobR-p1" : ['1. 学士以上学历，5年以上工业界模拟半导体测试经验；',''],
        "jobR-p2" : ['2. 熟练使用常用的自动测试机台；',''],
        "jobR-p3" : ['3. 精通测试电路和PCB设计调试，精通测试程序编程；',''],
        "jobR-p4" : ['4. 精通测试开发和数据分析；',''],
        "jobR-p5" : ['5. 有独立完成产品测试并大规模量产的经验；',''],
        "jobR-p6" : ['6. 优秀的沟通能力；能自我驱动，能独立完成工作；按照优先级处理好并行项目；',''],
        "jobR-p7" : ['7. 有电源或功率相关半导体器件、模块测试经验者优先；',''],
        "jobR-p8" : ['8. 有高压（600V或以上）测试经验者优先；',''],
        "jobR-p9" : ['9.有PCM测试经验者优先。','']
    },
    "job8" : {
        //招聘职位名称
        "jobN" :['器件工程师','Device Engineer'],
        //招聘信息职位描述
        "jobD-p1" : ['负责半导体功率器件从定义到量产的完整开发过程，具体包括以下方面：',''],
        "jobD-p2" : ['1. 半导体器件和工艺流程的设计：TCAD（器件和工艺）、版图设计、工艺流程的制定；',''],
        "jobD-p3" : ['2. 根据器件和工艺设计的要求，制定流片计划，对工艺流程做相应改进和优化，确保器件和工艺流程的定型和顺利量产；',''],
        "jobD-p4" : ['3. 掌握半导体器件晶圆级和封装后的静态、动态、可靠性测试表征，并且制定相关的测试计划；',''],
        "jobD-p5" : ['4. 收集和分析测试数据，制定工艺控制文件（PCD）；提供设计规则（Design Rule），完成器件设计文档的撰写；',''],
        "jobD-p6" : ['5. 配合product、spice modeling、ESD、pdk、Fab、assembly、IC design、system and application各个职能部门完成相关工作包括Failure Analysis、Qualification Support；',''],
        "jobD-p7" : ['欢迎从事半导体工艺和器件研究工作的优秀博士、硕士应届生来投递简历，在这里你将跟一群志存高远的伙伴共创一份事业，也将得到世界一流的工艺开发和器件设计的指导和异常宝贵的实践成长机会！',''],
        //招聘信息职位要求
        "jobR-p1" : ['1. 微电子、半导体物理、电子材料等相关专业，硕士或以上学历；',''],
        "jobR-p2" : ['2. 至少3年工作经历 （优秀应届生除外）；',''],
        "jobR-p3" : ['3. 熟悉半导体工艺流程，熟练掌握半导体器件（MOSFET, IGBT，Diode，BJT）器件原理；',''],
        "jobR-p4" : ['4. 有量产功率器件和工艺开发经验者优先；',''],
        "jobR-p5" : ['5. 英语听说读写能力良好；',''],
        "jobR-p6" : ['6. 具备良好团队精神、工作主动性强，承压能力强；',''],
        "jobR-p7" : ['7. 优秀的计划、执行和分析总结能力；',''],
        "jobR-p8" : ['8. 具备优秀的项目管理、驱动能力；','']
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
    "tel": '+86 021-6087 0173',
    "email": 'jun.cao@inventchip.com.cn'
};

/* ==================================================
    关于我们
  ================================================== */
//时间轴

var timelineData = {

    //日期不分中英文
    // 例子："timeline-day" : ['7','5','4','3','2','1'],
    "timeline-day" : ['12','17'],
    // 例子："timeline-date" : ['2017/7/17','2017/5/20','2017/4/20','2017/3/20','2017/2/20','2017/1/20'],
    "timeline-date" : ['2018/1/12','2017/7/17'],
    //月份不分左右侧
    //例子： "timeline-month-cn" : ['6月','5月','4月','3月','2月','1月'],
    "timeline-month-cn" : ['1月','7月'],
    //例子： "timeline-month-en" : ['JUN','MAY','APR','MAR','FEB','JAN'],
    "timeline-month-en" : ['JAN','JUL'],

    /* ==================================================
    右侧标题
  ================================================== */
    // 例子： "timeline-cap-right-cn" : ['右侧大事记6','右侧大事记4','右侧大事记2'],
    "timeline-cap-right-cn" : ['上海瞻芯电子科技有限公司成立'],
    // 例子： "timeline-cap-right-en" : ['RIGHT6','RIGHT4','RIGHT2'],
    "timeline-cap-right-en" : ['Founded'],
    /* ==================================================
    左侧标题
  ================================================== */
    // 例子： "timeline-cap-left-cn" : ['左侧大事记5','左侧大事记3','左侧大事记1'],
    "timeline-cap-left-cn" : ['从海洋科技园乔迁至临港科创园'],
    // 例子： "timeline-cap-left-en" : ['LEFT5','LEFT3','LEFT1'],
    "timeline-cap-left-en" : ['Office Moved from Marine Science and Technology Park to Lingang Kechuang Park'],

    /* ==================================================
    右侧内容
  ================================================== */
    //例子： "timeline-content-right-cn" : ['右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多6','右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多4','右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，右侧大事记很多很多很多很多很多很多很多很多很多很多很多很多2'],
    "timeline-content-right-cn" : ['上海瞻芯电子科技有限公司成立于2017年7月17日，位于东海之滨，滴水湖畔的临港科技城园区，是一家由海归博士领衔的高科技初创企业。'],
    // 例子："timeline-content-right-en" : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    "timeline-content-right-en" : ['Founded on Jul 17, 2017 in the dynamic new city, Lingang, Shanghai.'],

    /* ==================================================
   左侧内容
 ================================================== */

    // 例子： "timeline-content-left-cn" : ['左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多5','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多3','左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多，左侧大事记很多很多很多很多很多很多很多很多很多很多很多很多1'],
    "timeline-content-left-cn" : ['公司于2018年1月12日，正式入驻临港科技城下辖的临港科创园：海洋一路333号8号楼3楼。这个1000平米的物业将承担起公司的功率器件和集成电路产品研发的重任。'],
    // 例子： "timeline-content-left-en" : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
    "timeline-content-left-en" : ['Inventchip Technology Co., Ltd. officially settled Lingang Science and Technology City, on January 12, 2018. Under the jurisdiction of Lingang Kechuang Park: Ocean One Road 333, Building 8, 3rd Floor. The 1,000 square meters of property will take the heavy responsibility of company\'s power Device and integrated circuit product development.']
};

// 行业信息

var newsData = {
    "href" : {
        "0" : "http://powerpulse.net/1200v-sic-schottky-diodes-rated-for-8a-15a-and-20a/",
        "1" : "http://powerpulse.net/gan-enables-1600w-titanium-power-supply-for-gamers/",
        "2" : "http://powerpulse.net/littelfuse-completes-acquisition-of-ixys/",
        "3" : "http://powerpulse.net/full-bridge-sip-includes-mosfets-gate-drivers-and-protection/",
        "4" : "http://powerpulse.net/full-sic-power-modules-for-formula-e-racing-team-venturi/",
        "5" : "https://compoundsemiconductor.net/article/102921/IDT_Introduces_SiC_Humidity_Sensors%7BfeatureExtra%7D",
        "6" : "http://articles.sae.org/13244/",
        "7" : "http://www.semiconductor-today.com/news_items/2018/jan/disco_090118.shtml",
        "8" : "http://www.semiconductor-today.com/news_items/2018/jan/sdk_230118.shtml",
        "9" : "http://powerpulse.net/gan-enables-compact-1kw-isolated-bidirectional-dc-dcs",
        "10" : "http://powerpulse.net/1200v-gan-based-power-modules-from-visic-and-tsmc",
        "11" : "http://powerpulse.net/6-5kv-full-sic-power-module-claims-worlds-highest-power-density",
        "12" : "http://powerpulse.net/1200v-sic-schottkys-designed-to-endure-high-pollution-environments",
        "13" : "http://powerpulse.net/new-ferrite-for-high-frequency-gan-and-sic-power-converters",
        "14" : "http://powerpulse.net/?post_type=post&p=149358&source=ppd",
        "15" : "http://powerpulse.net/twinning-promises-to-vastly-reduce-wafering-costs-for-sic-based-devices",
        "16" : "http://powerpulse.net/mersen-to-acquire-49-of-sic-start-up-caly-technologies",
        "17" : "http://powerpulse.net/sic-enables-98-5-efficient-6-6-kw-totem-pole-pfc-reference-design/",
        "18" : "http://powerpulse.net/finsix-announces-strategic-partnership-with-toyota-industries/",
        "19" : "http://powerpulse.net/ii-vi-incorporated-opens-new-epi-wafer-facility/",
        "20" : "https://finance.yahoo.com/news/axcelis-announces-multiple-orders-purion-120000944.html",
        "21" : "http://powerpulse.net/mosfet-based-600w-mini-ipm-motor-drivers-deliver-higher-efficiency/",
        "22" : "http://powerpulse.net/silicon-breakthrough-could-make-key-microwave-technology-cheaper-and-better/",
        "23" : "http://powerpulse.net/sic-mosfets-enable-240a-pulses-at-60hz-repetition/",
        "24" : "tesla model.html"
  },
    "aCap" : {
        "0" : "Littlefuse 1200V SiC Schottky Diodes Rated for 8A, 15A and 20A",
        "1" : "GaN Enables 1600W Titanium Power Supply for Gamers",
        "2" : "Littelfuse Completes Acquisition of IXYS",
        "3" : "Full-Bridge SiP Includes MOSFETs, Gate Drivers, and Protection",
        "4" : "Full SiC Power Modules for Formula E Racing Team Venturi",
        "5" : "IDT Introduces SiC Humidity Sensors",
        "6" : "Efficient power electronics for hybrids and EVs",
        "7" : "Disco develops DAL7440 KABRA laser saw for 8-inch SiC wafers",
        "8" : "SDK to expand high-grade SiC epi capacity further to 7000 wafers per month by September",
        "9" : "GaN Enables Compact 1kW Isolated Bidirectional DC-DCs - Jan 24 of 2018",
        "10" : "1200V GaN-based Power Modules from VisIC and TSMC – Feb 07 of 2018",
        "11" : "6.5kV Full-SiC Power Module Claims World’s Highest Power Density – Feb 01 of 2018",
        "12" : "1200V SiC Schottkys Designed to Endure High-Pollution Environments from Cree - Feb 22, 2018",
        "13" : "New Ferrite for High-Frequency GaN and SiC Power Converters TDK – Feb 23, 2018<",
        "14" : "Infineon and Cree agree on Long-Term SiC Wafer Supply – Feb 27,2018",
        "15" : "“Twinning” Promises to Vastly Reduce Wafering Costs for SiC-Based Devices Siltectra – Feb 27, 2018",
        "16" : "Mersen to Acquire 49% of SiC Start-up CALY Technologies – Apr 20, 2018",
        "17" : "SiC Enables 98.5% Efficient 6.6-kW Totem-Pole PFC Reference Design – Apr 23, 2018",
        "18" : "FINsix Announces Strategic Partnership with Toyota Industries – May 10, 2018",
        "19" : "II-VI Incorporated Opens New Epi Wafer Facility – May 16, 2018",
        "20" : "Axcelis Announces Multiple Orders For 'Purion M' Implanter From Leading Power Device Manufacturers – May 22, 2018",
        "21" : "MOSFET-based 600W Mini IPM Motor Drivers Deliver Higher Efficiency – May 24, 2018",
        "22" : "Silicon Breakthrough Could Make Key Microwave Technology Cheaper and Better – May 25, 2018",
        "23" : "SiC MOSFETs enable 240A Pulses at 60Hz Repetition: X-ray free-electron laser  – Jun 27, 2018",
        "24" : "Tesla Model 3 Disassembly - Sep 06, 2018"
    }
};