### This is a roadmap for the planned database structure

{
    **Object array of customers and info**

    customers: [{
        customerName: {
            username: String,
            password: encryptedString
            invoices: [{
                invoiceNumber: String *(Will present as an Int but format to string for future-proofing)*,
                invoiceAmount: String,
                dateDue: String,
                dateBilled: String,
                invoiceItems: [Strings],
                itemDetails: [Strings] (each index should correspond to the item),
                hasBeenPaid: Boolean
            }]
        }
    }]
}