function resize(choice, width) {

    let resizeFn
    switch (choice) {
        case 1:
            resizeFn = function () {
                document.getElementById('txtValue').setAttribute('style', `width:${width}px`)
            }
            break;

        case 2:
            resizeFn = function () {
                document.getElementById('btnClick').setAttribute('style', `width:${width}px`)
            }
            break;

        default:
            break;
    }
    return resizeFn
}

window.addEventListener(
    'DOMContentLoaded',
    function () {

        const radioTxt = this.document.getElementById('radioTxt')

        radioTxt
            .addEventListener(
                'change',
                (ev) => {
                    console.log('fired')
                    //if (this.checked) {
                    if (ev.target.checked) {
                        console.log('checked')
                        let resizeTxt = resize(1, Number(document.getElementById('txtValue').value))
                        resizeTxt()
                    }
                }
            )

        const radioBtn = this.document.getElementById('radioBtn')
        radioBtn
            .addEventListener(
                'change',
                function (ev) {
                    console.log('fired')
                    if (this.checked) {
                        console.log('checked')
                        let resizeBtn = resize(2, Number(document.getElementById('txtValue').value))
                        resizeBtn()
                    }
                }
            )
    }
)