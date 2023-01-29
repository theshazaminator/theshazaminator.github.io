var qs = require('qs');

export const send = async (msg, receiver) => {
    const url = "https://api.twilio.com/2010-04-01/Accounts/AC06a96291fab11cf706b7f7f8cce95ec5/Messages.json";


    await(axios.post(url, qs.stringify({
        Body: msg,
        From: "+18559322931",
        To: receiver
      }), {
        auth: {
          username: "AC06a96291fab11cf706b7f7f8cce95ec5",
          password: "5eb86c0ca5c58b03b67a09d72860b430"
        }
      }));
}
