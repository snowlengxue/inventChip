jQuery.fn.pagination=function(maxentries,opts){
    opts=jQuery.extend({
        items_per_page:10,
        num_display_entries:10,
        current_page:0,
        num_edge_entries:0,
        link_to:"#",
        prev_text:"Prev",
        next_text:"Next",
        ellipse_text:"...",
        prev_show_always:true,
        next_show_always:true,
        callback:function(){return false;}},
        opts||{});
    return this.each(function(){
            function numPages(){
                return Math.ceil(maxentries/opts.items_per_page);
            };
            function getInterval(){
                var ne_half=Math.ceil(opts.num_display_entries/2);
                var np=numPages();
                var upper_limit=np-opts.num_display_entries;
                var start=current_page>ne_half?Math.max(Math.min(current_page-ne_half,upper_limit),0):0;
                var end=current_page>ne_half?Math.min(current_page+ne_half,np):Math.min(opts.num_display_entries,np);
                return[start,end];
            };
            function pageSelected(page_id,evt){
                current_page=page_id;
                drawLinks();
                var continuePropagation=opts.callback(page_id,panel);
                if(!continuePropagation){
                    if(evt.stopPropagation){
                        evt.stopPropagation();
                    }
                    else{evt.cancelBubble=true;};
                };
                return continuePropagation;
            };
            function drawLinks(){
                panel.empty();
                var interval=getInterval();
                var np=numPages();
                var getClickHandler=function(page_id){
                    return function(evt){return pageSelected(page_id,evt);};
                };
                var appendItem=function(page_id,appendopts){
                    page_id=page_id<0?0:(page_id<np?page_id:np-1);
                    appendopts=jQuery.extend({text:page_id+1,classes:""}, appendopts||{});
                    if(page_id==current_page){var lnk=jQuery("<span class='current'>"+(appendopts.text)+"</span>");}
                    else{var lnk=jQuery("<a>"+(appendopts.text)+"</a>").bind("click",getClickHandler(page_id)).attr('href',opts.link_to.replace(/__id__/,page_id));};
                    if(appendopts.classes){lnk.addClass(appendopts.classes);};
                    panel.append(lnk);
                };
                if(opts.prev_text&&(current_page>0||opts.prev_show_always)){
                    appendItem(current_page-1,{text:opts.prev_text,classes:"prev"});
                };
                if(interval[0]>0&&opts.num_edge_entries>0){
                    var end=Math.min(opts.num_edge_entries,interval[0]);
                    for(var i=0;i<end;i++){appendItem(i);};
                    if(opts.num_edge_entries<interval[0]&&opts.ellipse_text){jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);};
                };
                for(var i=interval[0];i<interval[1];i++){appendItem(i);};
                if(interval[1]<np&&opts.num_edge_entries>0){
                    if(np-opts.num_edge_entries>interval[1]&&opts.ellipse_text){jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);};
                    var begin=Math.max(np-opts.num_edge_entries,interval[1]);
                    for(var i=begin;i<np;i++){appendItem(i);};
                };
                if(opts.next_text&&(current_page<np-1||opts.next_show_always)){appendItem(current_page+1,{text:opts.next_text,classes:"next"});};
            };
            var current_page=opts.current_page;
            maxentries=(!maxentries||maxentries<0)?1:maxentries;
            opts.items_per_page=(!opts.items_per_page||opts.items_per_page<0)?1:opts.items_per_page;
            var panel=jQuery(this);
            this.selectPage=function(page_id){pageSelected(page_id);};
            this.prevPage=function(){
                if(current_page>0){
                    pageSelected(current_page-1);
                    return true;
                }
                else{return false;}
            };
            this.nextPage=function(){
                if(current_page<numPages()-1){
                    pageSelected(current_page+1);
                    return true;
                }
                else{return false;}
            };
            drawLinks();
            opts.callback(current_page,this);
    });
};

$(document).ready(function() {
    /* ==================================================
       行业信息
   ================================================== */

    $(function(){
        //总数目
        var length1 = $(".keyi").length;
        //从表单获取分页元素参数
        var optInit = getOptionsFromForm();
        $("#Paginationid1").pagination(length1, optInit);

        // 按钮事件
        $("#setoptions").click(function(){
            var opt = getOptionsFromForm();
            // 重新创建分页参数
            $("#Paginationid1").pagination(length1, opt);
        });
        //-----------------------------------
        function getOptionsFromForm(){
            var opt = {callback: pageselectCallback};
            // 从文本域中收集参数 - 这些空间名与参数名相对应
            $("input:text").each(function(){
                opt[this.name] = this.className.match(/numeric/) ? parseInt(this.value) : this.value;
            });
            //避免demo重引入HTML
            var htmlspecialchars ={ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}
            $.each(htmlspecialchars, function(k,v){
                opt.prev_text = opt.prev_text.replace(k,v);
                opt.next_text = opt.next_text.replace(k,v);
            })
            return opt;
        }
        //-------------------------------
        function pageselectCallback(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = $("#items_per_page1").val();
            var max_elem = Math.min((page_index+1) * items_per_page, length1);

            $("#Searchresult1").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#Searchresult1").append($("#hiddenresult1 .keyi:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }
    });
    /* ==================================================
       技术文档
   ================================================== */
    $(function(){
        //总数目
        var length2 = $(".keyj").length;
        //从表单获取分页元素参数
        var optInit = getOptionsFromForm();
        $("#Paginationid2").pagination(length2, optInit);

        // 按钮事件
        $("#setoptions").click(function(){
            var opt = getOptionsFromForm();
            // 重新创建分页参数
            $("#Paginationid1").pagination(length2, opt);
        });
        //-----------------------------------
        function getOptionsFromForm(){
            var opt = {callback: pageselectCallback};
            // 从文本域中收集参数 - 这些空间名与参数名相对应
            $("input:text").each(function(){
                opt[this.name] = this.className.match(/numeric/) ? parseInt(this.value) : this.value;
            });
            //避免demo重引入HTML
            var htmlspecialchars ={ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"}
            $.each(htmlspecialchars, function(k,v){
                opt.prev_text = opt.prev_text.replace(k,v);
                opt.next_text = opt.next_text.replace(k,v);
            })
            return opt;
        }
        //-------------------------------
        function pageselectCallback(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = $("#items_per_page2").val();
            var max_elem = Math.min((page_index+1) * items_per_page, length2);

            $("#Searchresult2").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#Searchresult2").append($("#hiddenresult2 .keyj:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }
    });


});