<script setup>

</script>

<template>
    <div class="footer">
        <h1>我的博客有什么特点？</h1>
    </div>
    <div class="unique">
        <ul>
            <li>
                <div class="image">
                    <img src="@/assets/images/钻石镐.png" alt="">
                </div>
                <h2>&nbsp;&nbsp;独立制作</h2>
                <p>&nbsp;&nbsp;无过多的CV大法</p>
                <p>&nbsp;&nbsp;博主由页面到后端纯手敲喔</p>
            </li>
            <li>
                <div class="image">
                    <img src="@/assets/images/绿宝石.png" alt="">
                </div>
                <h2>免费开源</h2>
                <p>代码会在GitHub等地方免费下载</p>
                <p>不会自己写代码？扣源码啊0v0!</p>
            </li>
            <li>
                <div class="image">
                    <img src="@/assets/images/附魔瓶.png" alt="">
                </div>
                <h2>不断改进</h2>
                <p>这个项目会保持更新</p>
                <p>这是我的博客，当然越精致越好啦</p>
            </li>
        </ul>
    </div>
    <div class="end">
        <p>基于vue的前段项目，现在他或许是一个前段项目，但是经过我的不断完善，他会变成一个完整的整体。</p>
        <el-button type="info" plain size="large" style="color: black; font-weight: bold;">开始使用</el-button>
    </div>
    <div class="end_end">
        <p>2023-7-6|Horez-Blog</p>
        <p>由Horez强力制作。</p>
    </div>
</template>

<style scoped lang="scss">
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: rgb(220, 220, 220);
    border-top: solid 5px #999;
    /* 添加灰色的上边框 */
}

.unique {
    height: 350px;
    background-color: rgb(220, 220, 220);

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between; //  水平平均分布
        margin-left: 250px;
        margin-right: 250px;

        p {
            text-align: center;
            font-size: 18px;
        }
    }
}

.end {
    height: 200px;
    background-color: rgb(50, 50, 50);
    display: flex;
    align-items: center;
    justify-content: space-between; //  水平平均分布
    padding-right: 150px;
    padding-left: 150px;

    p {
        text-indent: 28px;
        max-width: 500px;
        color: rgba(255, 255, 255, 0.8);
    }
}

.end_end {
    height: 50px;
    background-color: rgb(30, 30, 30);
    display: flex;
    align-items: center;
    justify-content: space-between; //  水平平均分布
    padding-right: 150px;
    padding-left: 150px;

    p {
        text-indent: 28px;
        max-width: 500px;
        color: rgba(255, 255, 255, 0.8);
    }
}

h1 {
    font-size: 40px;
}

h2 {
    text-align: center;
    font-size: 30px;
}

.image {
    width: 100px;
    height: 100px;
    img {
        width: 100%;
        height: 100%;
        margin-left: 75px;
    }
}</style>
