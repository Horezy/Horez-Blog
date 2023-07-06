<template>
    <div class="blog">
        <div class="title">{{ title }}</div>
        <div class="author">--{{ author }}</div>
        <div class="content" v-html="blogContent"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            title: 'Horez-Blog',
            author: 'Horez',
            blogContent: `<p>欢迎来到我的个人博客！</p>
                      <p>我是Horez，一个喜欢分享技术和生活的人。</p>
                      <br>
                      <p>在这个博客中，我将分享一些我在编程、游戏和生活等方面的经验和见解。</p>
                      <p>希望我的博客能够给你带来一些有用的信息和灵感！</p>`
        }
    }
}
</script>
  
<style>
.blog {
    max-width: 800px;
    padding: 50px;
    height: 700px;
    color: rgba(255, 255, 255, 0.8);
    padding-top: 130px;
    .title{
        font-size: 30px;
        font-weight: bold;
    }
    .author{
        font-size: 12px;
        margin-left: 150px;
    }
    .content p:nth-child(1){
        text-indent: 25px;
    }
}
</style>