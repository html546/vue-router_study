export let str = '我很帅';
export let str2 = '我很英俊';
// 会将str和str2放到一个对象内导出{str:'我很帅',str2:'我很英俊'}
export let a = ()=>{
    alert(1)
}

// babel Object.defineProperty 模块