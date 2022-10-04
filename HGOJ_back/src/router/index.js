import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true,
        meta: {
            show: true
        }
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },


    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: {
                title: '首页',
                icon: 'el-icon-s-home'
            }
        }]
    },

    {
        path: '/addproblems',
        component: Layout,
        children: [{
            path: '/addproblems',
            component: () =>
                import ('@/views/addProblems'),
            meta: {
                title: '添加问题',
                icon: 'el-icon-circle-plus-outline'
            }
        }]
    },
    {
        path: '/problemlist',
        component: Layout,
        children: [{
            path: '/problemlist',
            component: () =>
                import ('@/views/problemList'),
            meta: {
                title: '问题列表',
                icon: 'el-icon-s-order'
            }
        }]
    },
    {
        path: '/addcompetitionorhomework',
        component: Layout,
        children: [{
            path: '/addcompetitionorhomework',
            component: () =>
                import ('@/views/addCompetitionOrHomework'),
            meta: {
                title: '添加竞赛&作业',
                icon: 'el-icon-circle-plus-outline'
            }
        }]
    },
    // {
    //     path: '/dashboard',
    //     component: Layout,
    //     children: [{
    //         path: '/competitionorhomeworklist',
    //         component: () =>
    //             import ('@/views/competitionOrHomeworkList'),
    //         meta: {
    //             title: '竞赛&作业列表',
    //             icon: 'el-icon-s-order'
    //         }
    //     }]
    // },
    {
        path: '/rejudgeproblems',
        component: Layout,
        children: [{
            path: '/rejudgeproblems',
            component: () =>
                import ('@/views/rejudgeProblems'),
            meta: {
                title: '重判题目',
                icon: 'el-icon-refresh-right'
            }
        }]
    },
    {
        path: '/accountgiving',
        component: Layout,
        children: [{
            path: '/accountgiving',
            component: () =>
                import ('@/views/accountGiving'),
            meta: {
                title: '账号生成',
                icon: 'el-icon-user-solid'
            }
        }]
    },
    {
        path: '/userlist',
        component: Layout,
        children: [{
            path: '/userlist',
            component: () =>
                import ('@/views/userList'),
            meta: {
                title: '用户列表',
                icon: 'el-icon-user-solid'
            }
        }]
    },
    {
        path: '/setarticles',
        component: Layout,
        children: [{
            path: '/setarticles',
            component: () =>
                import ('@/views/setArticles'),
            meta: {
                title: '设置文章',
                icon: 'el-icon-edit'
            }
        }]
    },
    {
        path: '/articlelist',
        component: Layout,
        children: [{
            path: '/articlelist',
            component: () =>
                import ('@/views/articleList'),
            meta: {
                title: '文章列表',
                icon: 'el-icon-notebook-2'
            }
        }]
    },
    {
        path: '/authoritymannagement',
        component: Layout,
        children: [{
            path: '/authoritymannagement',
            component: () =>
                import ('@/views/authorityMannagement'),
            meta: {
                title: '权限管理',
                icon: 'el-icon-warning-outline'
            }
        }]
    },
    {
        path: '/authoritylist',
        component: Layout,
        children: [{
            path: '/authoritylist',
            component: () =>
                import ('@/views/authorityList'),
            meta: {
                title: '权限列表',
                icon: 'el-icon-s-order'
            }
        }]
    },
    {
        path: '/updatepassword',
        component: Layout,
        children: [{
            path: '/updatepassword',
            component: () =>
                import ('@/views/updatePassword'),
            meta: {
                title: '修改密码',
                icon: 'el-icon-refresh-right'
            }
        }]
    },

    {
        path: '/inorout',
        component: Layout,
        children: [{
            path: '/inorout',
            component: () =>
                import ('@/views/inOrOut'),
            meta: {
                title: '导入&导出',
                icon: 'el-icon-sort'
            }
        }]
    },

    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router