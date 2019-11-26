<template>
    <div>
        <el-menu
        class="el-menu-vertical-demo"
        :router="true"
        background-color="#343957"
        text-color="#fff"
        style="height:100%"
        :unique-opened="true">
            <!-- 一级菜单 -->
            <template v-for="(menu,index) in allMenu">
                <el-submenu v-if="menu.children.length!=0" :key="index" index="menu.menu_name">
                    <template slot="title">
                        <i :class="menu.icon"></i>
                        <span>{{ menu.menu_name }}</span>
                    </template>

                    <!-- 二级菜单 -->
                    <template v-for="(subMenu, subIndex) in menu.children">
                        <el-menu-item :index="subMenu.web_url" :key="subIndex">
                            <i :class="subMenu.icon"></i>
                            <span slot="title">{{ subMenu.menu_name }}</span>
                        </el-menu-item>
                    </template>

                </el-submenu>
                <el-menu-item v-else :index="menu.web_url" :key="index">
                    <i :class="menu.icon"></i>
                    <span slot="title">{{ menu.menu_name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { adminMenuConfig } from "../menuRouter";
    export default {
        data() {
            return {
                allMenu: []
            }
        },
        created() {
            this.allMenu = adminMenuConfig;
        }
    }
</script>