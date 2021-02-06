export const genUuid = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g,(cu,re)=>('x'===cu?(re=Math.random()*16|0):(re&0x3|0x8)).toString(16))
