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
    let creation_date = new Date(data.creation_date);
    let expiration_date = new Date(data.expiration_date);
    let updated_date = new Date(data.updated_date);
    datas.innerHTML = `Domain name:${data.domain_name} <br> Country:${data.country} <br> Creation Time:${creation_date} <br> email:${data.emails} <br> Expiration Time:${expiration_date} <br> Servers:${data.name_servers} <br> Organization:${data.org} <br> Registrar:${data.registrar} <br> State:${data.state} <br> Updated Time:${updated_date}` ;
  });
};