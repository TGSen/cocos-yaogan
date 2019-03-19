/**
 * @author kunji
 * @description 相机跟随人物移动
 * @time 2019/3/19
 * @ to do 
 */
cc.Class({
    extends: cc.Component,

    properties: {
       target:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if(!this.target){
            return;
        }
 
        // var w_pos = this.target.convertToWorldSpaceAR(cc.p(0, 0));
        // var c_pos = this.node.parent.convertToNodeSpaceAR(w_pos);
        // this.node.x = c_pos.x;
        // this.node.x = this.target.x;
        // this.node.y = this.target.y;
    },
});
