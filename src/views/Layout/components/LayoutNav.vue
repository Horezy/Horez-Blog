<script setup>

</script>

<template>
    <div class="nav">
        <ul class="content">
            <li><a href="">Horez-Logo</a></li>
            <li>
                <a href="">首页</a>
                <a href="">分类</a>
                <a href="">博主介绍</a>
                <a href="">动态</a>
            </li>
            <li>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <img class="avatar" src="@/assets/images/微信头像.jpg" alt="your avatar">
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>切换账号</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <a href="">用户中心</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.el-dropdown-link {
  outline: none;
  cursor: pointer;
}

.nav {
    background-color: rgba(200, 200, 200, 0.2);
    height: 50px
}

.content {
    display: flex;
    justify-content: space-between; //  水平平均分布
    margin-left: 20px;
    margin-right: 20px;

    li {
        margin-top: 12px;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8);
        /* 设置为白色 */
        font-weight: bold;

        /* 设置为加粗 */
        a {
            color: rgba(255, 255, 255, 0.8);
        }
    }

    li:nth-child(2),
    li:nth-child(3) {
        a {
            margin-right: 20px;
        }
    }

    li:nth-child(3) {
        margin-top: 5px;

        a {
            float: right;
            margin-top: 9px;
        }
    }
}

.avatar {
    width: 40px;
    /* 设置固定的宽度 */
    height: 40px;
    /* 设置固定的高度 */
    border-radius: 50%;
    margin-right: 8px;
}
</style>