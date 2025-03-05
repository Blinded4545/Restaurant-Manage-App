export const changeHtmlColorScheme = ()=>{
    if(document.getElementById('htmlElem')?.classList[0]==='dark'){
        document.getElementById('htmlElem')?.classList.remove('dark')
        document.getElementById('htmlElem')?.classList.add('light')
        document.getElementById('root')!.style.backgroundColor = '#FBFBFB'
        document.body.style.backgroundColor='#FBFBFB'
        return
    }
    document.getElementById('htmlElem')?.classList.remove('light')
    document.getElementById('htmlElem')?.classList.add('dark')
    document.getElementById('root')!.style.backgroundColor = '#1E201E'
    document.body.style.backgroundColor='#1E201E'
}