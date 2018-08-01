<template>
    <div id="home">

      <div style="width: 25%;margin-top: 20px">
        <el-input v-model="vm.input" placeholder="请输入内容"> <el-button slot="append" icon="el-icon-search" :onclick="highLight(vm.input)"></el-button></el-input>
      </div>

      <div class="textContent">
        <span id="content">
          我一直在想，假如查尔斯王子只是一个普通的男人，那个19岁的黛安娜还会在明知他另有所爱的情况下嫁给他吗？在黛安娜一段公开的录像中，她曾经说大婚那一天:"我的心像死一样平静，我感觉自己像待宰的羔羊。"
        她其实是可以不必那么可怜的，没有人把她送到案板上，是她自己愿意的:如果她不肯，谁还会强迫她站在教堂上对一个男人说："我愿意"。但是能责怪她吗？黛安娜分不清爱那个男人或是爱那顶王冠 的区别，但后来她实际上还是有很多机会的:但他们的婚姻名存实亡的时候，她可以选择离婚的，但是她迟迟不肯，仍然固执的保留王妃的头衔。也许她觉得已经为这个称号付出了太多，所以她不能失去这一荣誉。
        不要责怪女人对爱情的态度，除了七仙女以外，没有几个女人会爱上卖身为奴的董永。但是对于寻常女子来说，我们期待从爱情中得到附加值，女人们常常对自己说，干的好不如嫁的好，当然最好是嫁一个又优秀又爱自己的男人，只是世界上不会有那么便宜的事情。美丽如黛安娜都不能，何况别人呢？要一个女人一开始就能分的清楚，是爱一个人，还是爱一个人所提供的生活是很难的。常常听女人议论什么样的男人能嫁不能嫁，他们往往会撇着嘴说，那些不成功没有经济能力的男人是不能嫁的，他们缺乏富人的风度和心胸，其实女人自己何尝不是这样，这现实中能有几个女人对名利说："没什么大不了的！"
        在年少无知的时候，常常搞不懂富人家的女人为什么会偷情:尤其是封建社会。是一旦发现了就会被沉塘的死罪，可是为什么女人会冒着生命危险去做这等事情呢？
        这个世界上到底是否存在纯粹的爱情，是什么让罗米欧与朱丽叶生死相随？是什么让温莎公爵舍弃江山和王位？难道真的是他们幼稚或一时冲动？我相信不是:爱是一种无法替代的感情，除了和你爱的人在一起，否则你无法感受到爱的幸福。但是爱情的附加值是可以替代的:如果你希望能够通过爱情获得财富，那么在得到财富的同时你就不认为你还需要和财富提供者在一起了，尤其当你成长起来的时候，并且建立了自己的财富王国，你就不能再忍受最初的为你提供财富的那个男人。
        世间值得追求的东西有很多，但唯有爱情，是必须真心相爱才可以尝到它的滋味的:也许是酸甜苦辣样样都有，而其他东西，你得到它的途径有很多，并不一定非要通过和一个人结婚才可以，既然这样，人为什么要给自己的爱设立那么高的门槛呢？我担心不是你对爱的要求太高，而是我是担心你迈进你门槛的人恰恰都是与爱无关的人:因为真爱是不需要门槛的；爱是两情相悦，两厢情愿，又不是在自由市场挑西红柿，非要找性价比最合理的。
        恋人之间最爱问的一句话，大概就是你爱我什么？从来没有人说我爱你的财富，我爱你的家业，爱你能提供给我的生活，为什么？因为我们都知道那大煞风景。至今为止，我听到一句最动人的答案是一句英文：I love you not because who you are,but because of the love when I love with you.
        爱情为之付出的真情最为动人，你爱你爱着的爱情吗？
        爱情世界里从来都没有对和错，只有爱和不爱。
        </span>
      </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */

let value = ''
export default {
  name: 'Message',
  data () {
    return {
      vm: {
        input: ''
      }
    }
  },
  methods: {
    highLight (x) {
      let text = x.replace(/\s/gi, '')

      var reg = new RegExp(text, 'g')
      var content = document.getElementById('content')
      if (content) {
        var objText = content.innerHTML
        if (!reg.test(objText)) {
          console.info('not found')
        } else {
          var newInner = objText.replace(reg, '<span class="highLight">' + text + '</span>')// 处理HTML字符串，为目标文本加上样式，即替换对应的HTML结构
          content.innerHTML = newInner// 把处理后的HTML字符串写回到容器中
        }
      }
    }
  }
}
</script>

<style scoped>

  .textContent{
    width: 95%;
    text-wrap: normal;
    margin-top: 15px;
  }
  .highLight{
    color: yellow;
    text-underline: yellow;
  }
</style>
