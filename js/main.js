
function openWhatsApp(service,destination){
 const msg=`Hello,
I would like to enquire with the following details:

Service_Type: ${service}
Destination: ${destination}
Travel_Date: YYYY-MM-DD
Passengers: 1
Name:
Phone:
Email:
Source: Website Enquiry`;
 window.open("https://wa.me/919999591885?text="+encodeURIComponent(msg),"_blank");
}
