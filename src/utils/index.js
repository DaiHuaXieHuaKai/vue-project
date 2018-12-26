/*
 * @Author: Brainy 
 * @Date: 2018-12-18 14:19:11 
 * @Last Modified by:   Brainy 
 * @Last Modified time: 2018-12-18 14:19:11 
 */

export const getMenuObjct = (value, menus) => {
    let obj;
    for (let i in menus) {
        if (menus[i].id === value) {
            obj = menus[i];
            break;
        } else if (menus[i].children) {
            obj = getMenuObjct(value, menus[i].children)
        }
    }
    return obj;
}