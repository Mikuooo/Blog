
function NyanEdit(obj){
    // this.textarea = obj;
    // this.value = obj.innerHTML;
}

// 方法初始化
NyanEdit.prototype = {
    init: function (obj){
        let json = {};


        // const that = this;

        this.middleware(obj);
        return json;
    },

    // 判断标签存入对应数组
    middleware: function (obj){
        const content = [];
        obj.addEventListener('blur', function (){
            let pObj = this.innerHTML.split(/(<p>.*?<\/p>)/);
            let arr = pObj.filter(function (s){
                return s && s.trim();
            })
            // pArr.trim();

            console.log(arr);

        });
        return {};
    },

    // HTML+CSS代码格式化
    htmlCss: function(){

    },

    // JavaScript代码格式化
    js: function (){

    }
}







window.addEventListener('load', function (){
    console.log(window.NyanEdit)
    let textareaObj = document.querySelector('div.textarea');

    const nyan = new NyanEdit(textareaObj);

    nyan.init(textareaObj);
});