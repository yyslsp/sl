;(function($){
    "use strict";

    $.fn.banner = function(ops){

        //解析成默认
        ops = ops || {};
        //解构赋值
        let {imgitem,btns=true,list=true,autoplay=true,delaytime=2000,movetime=200,index=0} = ops;
        //测试参数的处理
        // console.log(imgitem,btns,list,autoplay,delaytime,movetime,index);

        const LOCAL = {imgitem,btns,list,autoplay,delaytime,movetime,index};
        // LOCAL.move = function(){}也可以往这个对象上添加功能

// ==========================================================
        const that = this;
        LOCAL.paev = null;
        //渲染图片
        let str = "";
        // imgitem是个数组，用forEach遍历出里边的数据
        LOCAL.imgitem.forEach(val => {
            //console.log(this);//this指向.box
            //将拼接好的图片设置好样式最后追加到box身上
            str += `<a href="##">
            <img src="${val.url}"  title="${val.title}" alt="${val.alt}"></a>`;

        });

// ==============================================

        //this.html(str);//str是个字符需要html放进去
        //给图片设置个单独的盒子
        $(`<div class="imgbox">`).html(str).appendTo(this).css({
            //给图片的盒子设置样式
            width:"100%",
            height:"100%",
            position:"relative",

            //设置a标签的样式
        }).children("a").css({
            width:"100%",
            height:"100%",
            position:"absolute",
            left:"100%"
        }).eq(index).css({
            left:0

            //设置图片的样式
        }).end().children("img").css({
            width:"100%",
            height:"100%",
        });


// ==================================
    //将有按钮的时间处理函数单独封装，为了自动轮播时使用
    LOCAL.rightClick = function(){
        //点击事件
        if(LOCAL.index === LOCAL.imgitem.length-1){
            LOCAL.index = 0;
            LOCAL.paev = LOCAL.imgitem.length-1
        }else{
            LOCAL.index++;
            LOCAL.paev = LOCAL.index-1;
        }
        // console.log(LOCAL.index,LOCAL.paev);
        LOCAL.btnmove(1);
    }

// ==========================================

            //正负得负
            //负负得正
            LOCAL.btnmove = function(d){
                that.children(".imgbox").children("a").eq(LOCAL.paev).css({
                    left:0
                }).stop().animate({
                    left:-100 * d + "%"
                }).end().eq(LOCAL.index).css({
                    left:100 * d +"%"
                }).stop().animate({
                    left:0
                })

                if(!LOCAL.list) return;
                that.children(".list").children("li").eq(LOCAL.index).css({
                    background:"red"
                }).siblings().css({
                    background:"white"
                })
            }

// =========================================
        //渲染按钮，并添加功能
        //判断，传了就渲染
        if(LOCAL.btns){
            //给按钮一个盒子
            let btnbox = $(`<div class="btns">`).css({
                width:"100%",
                position:"absolute",
                top:0,left:0
            }).appendTo(this);
// ======================================
            //创建左按钮，并绑定点击事件
            //将按钮添加到盒子里
            $(`<span class="left">&lt;</span>`).appendTo(btnbox).css({
                left:6,
                // borderRadius: "0 50% 50% 0"
            }).click(function(){
                //点击事件
                //先计算索引，提前准备index索引
                //再计算要进来的图片索引
                if(LOCAL.index === 0){
                    LOCAL.index = LOCAL.imgitem.length-1;
                    LOCAL.paev = 0
                }else{
                    LOCAL.index--;
                    LOCAL.paev = LOCAL.index+1;
                }
                // console.log(LOCAL.index,LOCAL.paev);
                //传入运动方向
               LOCAL.btnmove(-1)
            })
// ====================================
            //创建右按钮，并绑定点击事件
            //将按钮添加到盒子里
            $(`<span class="right">&gt;</span>`).appendTo(btnbox).css({
                right:10,
                // borderRadius: " 50% 0 0 50% "
            }).click(LOCAL.rightClick)
// ===========================================

// =========================================
            //span的公共样式
            btnbox.children("span").css({
                // display:"none",
                position:"absolute",
                width:30,height:60,
                // background:"rgba(255,255,255,0.6)",
                lineHeight:"60px",
                textAlign:"center",
                fontSize:"70px",
                fontWeight:"600",
                top:160,
                cursor: "pointer",
                color:"gray"
            }).hover(function(){
                $(this).css({
                    // background:"#FFFFFF",
                    color:"red"
                })
            },function(){
                $(this).css({
                    //background:"rgba(255,255,255,0.6)",
                    color:"gray"
                })
            })


        }

        //渲染下标按钮，并添加功能
        if(LOCAL.list){
            //只有一个ul
            //创建list容器
            let list =  $(`<ul class = "list">`)
            //有几张图片就有几个下标，遍历出图片下标
            //idx是索引
            //val是图片
            LOCAL.imgitem.forEach((val,idx) =>{
               list.append(`<li></li>`)
               //${idx+1}
            })

            list.appendTo(this).css({
                width:"140px",
                position:"absolute",
                // left:0,
                marginLeft:"50%",
                left:"-70px",
                bottom:"20px",
                // background:"rgb(221,221,221,0.6)",
                display:"flex",
                textAlign:"center",
                lineHeight:"20px",
            }).children("li").css({
                margin:"0 2px",
                height:"10px",
                width:"10px",
                // display:"none",
                flex:1,
                borderLeft:"1px solid #fff",
                borderRight:"1px solid #fff",
                background:"white",
                borderRadius:"50%",
            }).eq(LOCAL.index).css({
                background:"red",

                //给下标绑定事件
            }).end().click(function(){
                // console.log($(this).index());
                if($(this).index() < LOCAL.index){
                    //当前LOCAL.index,走
                    that.children(".imgbox").children("a").eq(LOCAL.index).css({
                        left:0
                    }).stop().animate({
                        left:100  + "%"
                    }).end().eq($(this).index()).css({
                        left:-100 +"%"
                    }).stop().animate({
                        left:0
                    })
                    //点击的 $(this).index,进来

                }
                if($(this).index() > LOCAL.index){
                     //当前LOCAL.index,走
                     that.children(".imgbox").children("a").eq(LOCAL.index).css({
                         left:0
                     }).stop().animate({
                        left:-100  + "%"
                    }).end().eq($(this).index()).css({
                        left:100 +"%"
                    }).stop().animate({
                        left:0
                    })
                    //点击的 $(this).index,进来
                }
                //切换图片之后，记得更新list当前项
                $(this).css({
                    background:"red"
                }).siblings().css({
                    background:"#FBFBFB"
                })
                //点击之后，将点击的索引设置为当前索引
                LOCAL.index = $(this).index();
            });

        }

        //自动播放
         // 4.根据条件，自动播放
         if(LOCAL.autoplay){
            // 开启计时器
            LOCAL.t = setInterval(() => {
                // 计时器每次执行右按钮的事件处理函数
                LOCAL.rightClick();
            }, LOCAL.delaytime);
            this.hover(function(){
                clearInterval(LOCAL.t)
            },function(){
                LOCAL.t = setInterval(()=>{
                    LOCAL.rightClick();
                },LOCAL.delaytime)
            })

           
        }


    }

})(jQuery);