declare namespace Layer3{
        enum LayerIcon{
        OK=1,
        Error=2,
        Help=3,
        Lock=4,
        CryFace=5,
        SmileFace=6,
        Warning=7
    }

    enum LayerType{
        page=1,
        iframe=2,
        loading=3,
        tips=4
    }

    interface ILayer {
        open(opt:ILayerOptions):number;
        alert(msg:string, opt: {icon:LayerIcon, skin?:string});
        confirm(msg:string, opt:{btn:string[]},cb1?:Function,cb2?:Function);
        msg(msg:string,opt?:{
            time?:number,
            icon?:LayerIcon,
            btn?:string[],
            yes?:Function
        });
        msg(msg:string,closeCbFunc:Function);
        tips(msg:string,connectId:string /*#id*/,opt?:{tips?:IlayerTipDirection|[IlayerTipDirection,string],time?:number});
        load(style?:number,opt?:{shade?:boolean|any[]}):number;
        tab(opt:{
            area:[string,string],
            tab:{title:string,content:string}[]
        });

        photos(opt:{
                photos:object,
                anim:number
        });
        closeAll(type?:'loading');
        full(idx:number); //全屏某个层
    }

    interface ILayerOptions{
        id?:string; //设置后1个id只能弹出一次,即界面上永远不会重复.
        type:LayerType,
        area?:['auto'|string,'auto'|string];  //['800px','600px']
        title?:string,
        shade?:number; //0.6
        maxmin?:boolean; //允许全屏最小化.
        anim?:number ; //-1===6
        content:string|JQuery;
        fix?:boolean;  //固定
        shadeClose?:boolean;
        closeBtn?:0|1; //==0 不显示关闭按钮
        offset?:'rb'|'t'|string ;//右下角弹出
        time?:number;  //几秒关闭
        end?:Function; //层销毁回调函数
        skin?:'layui-layer-nobg'|'layui-layer-rim'|string
        btnAlign?:'l'|'c'|'r' //铵钮对齐方式
        resize?:boolean;
        resizing?:(layero)=>void;
        maxWidth?:number; //当area:'auto'才有效.
        zindex?:number;
        success?:(layero, index:number)=>void; //弹出成功后回调函数
        yes?:(index:number,layero)=>void; //第1个按钮回调函数.
        cancel?:(index:number,layero)=>void;  //右上解关闭回调函数.
        full?:()=>void;  //最大化回调
        min?:()=>void;   //最小化回调
        restore?:()=>void;  //还原回调
        btn?:string[]
    }

    enum IlayerTipDirection{
        top=1,
        right=2,
        bottom=3,
        left=4
    }
}
///var layer3 = layer;   http://layer.layui.com/ 3.0
declare var layer3:Layer3.ILayer;