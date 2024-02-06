$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open"); // Assuming this is your "Yes" button
    var btn_reset = $("#reset"); // This will now act as your "No" button, so you might want to rename it in HTML as well

    // Rename the "Reset" button to "No" initially, if not already done in HTML
    btn_reset.text("HAPPY BDAYY");

    var noButtonTexts = ["i love u a lot", "my pookie smukii lukiii", "never met someone as amaizing as u ", "best girl", "i hope ur every wish comes tru" , "ilyyy", "i hope that ull have the best bday ever"];
    var noClickCount = 0;

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        if (noClickCount < noButtonTexts.length) {
            btn_reset.text(noButtonTexts[noClickCount]);
            noClickCount++;
            if (noClickCount == noButtonTexts.length) {
                btn_reset.off("click").click(function() {
                    open(); // Open the envelope after cycling through all texts
                });
            }
        }
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
