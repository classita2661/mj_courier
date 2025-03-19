frappe.listview_settings["Location MRF"] = {
    onload: function (report) {
        // Add a custom button to the Stock Balance report
        report.page.add_inner_button(__('QR Code List'), function () {
            
            var url = `/api/method/frappe.utils.print_format.download_pdf?doctype=Location%20MRF&name=SOLD%20TO%20WCA&format=MRF%20Location%20List%203&no_letterhead=0&letterhead=LOL%20sdn%20berhad&settings=%7B%7D&_lang=en`;
            window.open(url, "_blank");
        });
    }
};