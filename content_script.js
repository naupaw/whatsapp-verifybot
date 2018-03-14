// http://web.whatsapp.com/send?phone=6283877603399&text=Kode%20Verifikasi%20Anda%201234

function kodeVerifikasi (kode) {
    var msg = encodeURIComponent(`Kode Verifikasi Anda : ${kode}`)
    window.open("http://web.whatsapp.com/send?phone=6283877603399&text=" + msg, "WhatsApp", "width=800,height=800");
}

$(document).ready(function() {

    $("body").append(`
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
    `)

    var waitChange = function() {
        $('.copyable-area').bind('DOMSubtreeModified', function(e) {
            if (e.target.innerHTML.length > 0) {
                console.log('CHANGED', e)
                console.log('ICON', $(e.target).data('icon'))
                var icon = $(e.target).data('icon') 
                if(icon == "msg-check" || icon == "msg-dblcheck") {
                    window.close()
                }
            }
        });

        setTimeout(function() {
            window.close()
        }, 10000)
    }

    var getC = setInterval(function() {
        //if($('#pane-side').length > 0) {
        if($("span[data-icon=send]").length > 0) {
            console.log(`Found !`)
            waitChange()
            clearInterval(getC)
            $("span[data-icon=send]").parent().click()
        } else {
            console.log(`Waiting !`)
        }
    }, 2000);
})

