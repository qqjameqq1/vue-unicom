// 注册
Vue.component("cbtn", {
    template: `<div>
    <p>自己收到的信息：{{msg}}</p>
    <hr />
    <button @click="$unicom('message', '通用Send')">发送指令 message</button>
        
    <button @click="$unicom('message@a', 'Send@a')">发送指令 message@a</button>
    <button @click="$unicom('message#a-id1', 'Send#a-id1')">发送指令 message#a-id1</button>
    <button @click="$unicom('message#a-id2', 'Send#a-id2')">发送指令 message#a-id2</button>

    <button @click="$unicom('message@b', 'Send@b')">发送指令 message@b</button>
    <button @click="$unicom('message@b1', 'Send@b1')">发送指令 message@b1</button>
    <button @click="$unicom('message@b2', 'Send@b2')">发送指令 message@b2</button>

    <button @click="$unicom('message@c', 'Send@c')">发送指令 message@c</button>

    <button @click="getA_id1">发送指令 message@c from #a-id1</button>
    </div>`,
    unicom: {
        message: function({ data }) {
            // 指令发送后，自己也能收到
            this.msg = data;
        }
    },
    data: function() {
        return {
            msg: ""
        };
    },
    methods: {
        getA_id1() {
            let id1msg = this.$unicom("#a-id1").target.msg;
            // console.log("group-b", this.$unicom('@b'))
            this.$unicom("message@c", "Send@c from #a-id1[" + id1msg + "]");
        }
    }
});
