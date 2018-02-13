
import { Alert, } from 'react-native';
const DBUrl = "https://app.asthmatic70.hasura-app.io/signup"
const networkErrorObj = {
  status: 503
}

export async function insertInDB(username, pass, name, email, mobile, DOB, city) {

  let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    }
  };

  var body =
    {
      "username": username,
      "email": email,
      "password": pass,
      "name": name,
      "phone": mobile,
      "city": city,
      "dob": DOB,
    }
  requestOptions["body"] = JSON.stringify(body);
  try {
    let resp = await fetch(DBUrl, requestOptions);
    //let data = await resp.json();
    //var myJSON = JSON.stringify(data).replace(/"+/g,"");
    //if(myJSON==="{result:This user already exists.}")

    console.log(resp);
    //console.log(myJSON);
    return resp;
  }
  catch (e) {
    console.log("Request Failed: " + e);
    return networkErrorObj;
  }
}

