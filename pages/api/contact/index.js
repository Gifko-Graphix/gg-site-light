export default async function contactFormHandler(req, res) {
  const email = req.body.emailAddress;
  console.log(req.body);
  res.end(JSON.stringify({ response: req.method }));

  // try {
  //   const response = await fetch('https://us14.api.mailchimp.com/3.0/lists/{listId}/members', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email_address: email,
  //       status: 'subscribed',
  //     }),
  //   });
  // } catch { }
} 
