let scanButton = document.getElementById("scanBtn");
let datas = document.getElementById("scanned-data");

let apikey = "dsP+TdRnYiSkAzzdXNbGkQ==PHgEK9D3Z80whofk";
let options = {
  method: "GET",
  headers: { "x-api-key": apikey }
};

let url = "https://api.api-ninjas.com/v1/whois?domain=";

let scanDomain = () => {
  event.preventDefault();
  let domainName = document.getElementById("domainId").value;
  let finalURL = url + domainName;
  fetch(finalURL, options).then((res) => res.json()).then((data) => {
    // console.log(data);
    datas.innerHTML = `Domain name: ${data.domain_name} <br> Country:  ${data.country} <br> Creation Date: ${data.creation_date}<br> email: ${data.emails}<br> Expiration Date: ${data.expiration_date}<br> Servers: ${data.name_servers}<br> Organization: ${data.org}<br> Registrar: ${data.registrar}<br> State: ${data.state}<br> Updated Date: ${data.updated_date}` ;
  });
};






// country
// :
// "us"
// creation_date
// :
// 1108444392
// dnssec
// :
// "unsigned"
// domain_name
// :
// ['youtube.com']
// emails
// :
// (2)['abusecomplaints@markmonitor.com', 'whoisrequest@markmonitor.com']
// expiration_date
// :
// (2)[1707973992, 1707955200]
// name_servers
// :
// (4)['ns1.google.com', 'ns3.google.com', 'ns4.google.com', 'ns2.google.com']
// org
// :
// "google llc"
// registrar
// :
// "markmonitor, inc."
// state
// :
// "ca"
// updated_date
// :
// 1673688319
// whois_server
// :
// "whois.markmonitor.com"