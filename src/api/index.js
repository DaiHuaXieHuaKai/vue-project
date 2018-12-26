/*
 * @Author: Brainy 
 * @Date: 2018-12-18 14:16:39 
 * @Last Modified by: Brainy
 * @Last Modified time: 2018-12-18 14:17:53
 */

import request from '@/utils/request'
export default {
    getList: () => {
        return request.get("http://", {
            data: "1222"
        })
    }
}