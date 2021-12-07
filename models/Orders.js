export default class {

    constructor ( 
        id,
        total ,
        orderItems,
        subtotal,
        taxes, 
        shipping   ) {

        this.id = id 
        this.total= total 
        this.createdAt= this.formatDate(new Date())
        this.orderItems= orderItems,
        this.subtotal=subtotal,
        this.taxes= taxes,
        this.shipping= shipping
    }

    formatDate(date){
        let month ;

        switch(date.getMonth()){
            case 1:month = "Jan";
                break;
            case 2:month = "Feb";
                break;
            case 3:month = "Mar";
                break;
            case 4:month = "Apr";
                break;
            case 5:month = "May";
                break;
            case 6:month = "Jun"; 
                break;
            case 7:month = "Jul";
                break;
            case 8:month = "Aug";
                break;
            case 9:month = "Sep";
                break;
            case 10:month = "Oct";
                break;
            case 11:month = "Nov";
                break;
            case 12:month = "Dec";
                break;
            }
        return date.getDay()+' '+month+' '+date.getYear();
    }
}