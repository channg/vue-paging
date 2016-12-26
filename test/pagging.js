var Paging = Vue.extend({
    data: function () {
        return {
            defaultOption:{
                pageSize:5,
                count:0,
                maxShowSize:6
            },
            floor:1,
            leftShow:false
        }
    },
    template: '<div class="vue-paging-warp">' +
    '<ul>' +
    '<li v-on:click="goStart()" >首页</li>' +
    '<li v-on:click="prevPage"class="no-border">«</li>' +
    '<li v-on:click="goAnwPage(item.index)" v-for="item in showPages" v-show="item.showSize" v-text="item.page" :class="item.index==bindpage?'+"'"+'active'+"'"+':'+"'"+''+"'"+'"></li>' +
    '<li v-on:click="nextPage" class="no-border">»</li>' +
    '<li  v-on:click="goEnd">末页</li>' +
    '</ul>' +
    '<span> 共 <span style="color: #dd1144" v-text="maxPages"></span> 页 </span>' +
    '</div>',
    props: {
        options:{

        },
        bindpage:{
            twoWay: true,
            default:0
        }
    },
    computed:{
        maxPages: function () {
            var i = Math.ceil(this.options.count/this.defaultOption.pageSize)
            return i
        },
        showPages: function () {
            var pagging = new Array(this.maxPages);
            for(var i = 0;i<pagging.length;i++){
                if((i-this.bindpage<this.defaultOption.maxShowSize&&i-this.bindpage>=0)||(this.bindpage-i<=this.defaultOption.maxShowSize&&this.bindpage-i>0)){
                    pagging[i]={page:i+1,showSize:true,index:i}
                }else{
                    pagging[i]={page:i+1,showSize:false,index:i}
                }
            }
            return pagging
        },
        leftOmit: function () {
            var first = this.showPages[0]
            return !(first.showSize)
        },
        rightOmit:function(){
            var last = this.showPages[this.showPages.length-1]
            return !(last.showSize)
        }
    },
    methods:{
        goStart:function(){

            this.bindpage = 0
            this.$emit('topage',this.bindpage)
        },
        goEnd:function(){
            this.bindpage = this.maxPages-1
            this.$emit('topage',this.bindpage)
        },
        goAnwPage: function (page) {
            this.bindpage = page
            this.$emit('topage',this.bindpage)
        },
        nextPage: function () {
            if(this.bindpage<this.maxPages-1){
                this.bindpage++
                this.$emit('topage',this.bindpage)
            }
        },
        prevPage: function () {
            if(this.bindpage>0){
                this.bindpage--
                this.$emit('topage',this.bindpage)
            }
        }
    },created: function () {
        if(this.options.pageSize){
            this.defaultOption.pageSize=this.options.pageSize
        }
        if(this.options.count){
            this.defaultOption.count=this.options.count
        }
        if(this.options.maxShowSize){
            this.defaultOption.maxShowSize=this.options.maxShowSize
        }
        this.defaultOption.defaultOption++
    }
})
Vue.component('paging', Paging)