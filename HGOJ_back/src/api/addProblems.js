import request from '@/utils/request'
import {
    host,
    port
} from './consts'

// 获取所有题目
// export function reqAllProblems() {
//     return request({
//         url: `http://101.43.55.108:8086/problem`,
//         method: 'get'
//     })
// }

export const reqAllProblems = () => request({
    url: `${host}${port}/problem`,
    method: 'get'
})

export const reqAddProblem = (data) => request({
    url: `${host}${port}/admin/add_problem`,
    method: 'post',
    data
})