// Copyright (c) 2023, vicky and contributors
// For license information, please see license.txt

frappe.ui.form.on("Purchase", {
  // refresh: function(frm) {

  // }

  quantity: function (frm) {
    frm.set_value({
      amount: frm.doc.rate * frm.doc.quantity,
    });
  },
  before_submit: function (frm) {
    let quantity;
    let total;
    frappe.db
      .get_value("Company", { name: frm.doc.company_name }, "cash_balance")
      .then(function (value) {
        console.log("Value", value);
        console.log(value.message.cash_balance);
        total = value.message.cash_balance - frm.doc.amount;
        frappe.db.set_value(
          "Company",
          frm.doc.company_name,
          "cash_balance",
          total
        );
      });
    frappe.db
      .get_value("Item", { name: frm.doc.item_id }, "qty")
      .then(function (value) {
        console.log(value.message.qty);

        quantity = value.message.qty + frm.doc.quantity;
        frappe.db.set_value("Item", frm.doc.item_id, "qty", quantity);
      });
  },
});
