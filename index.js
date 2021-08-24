const {OAuth2Client} = require('google-auth-library');

let CLIENT_ID = '240104470273-obbri2pu8qnf7h20qgeapt26jh1qv2ck.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
    idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlZjRiZDkwODU5MWY2OTdhOGE5Yjg5M2IwM2U2YTc3ZWIwNGU1MWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNDAxMDQ0NzAyNzMtb2JicmkycHU4cW5mN2gyMHFnZWFwdDI2amgxcXYyY2suYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyNDAxMDQ0NzAyNzMtMzcwaHM4a2ExNzczdjk2amcwOGVsZXRqcW5zNDMxYWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTY1MTI4MzgyMjE5MTQzNDQzMjEiLCJlbWFpbCI6ImFiYWhtaW1pQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiQWJhaCBKb3NlbWFyaWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lHTS1uaFRGR3hUdWdpcGxlSXIxVEVxRno0dVd3dTdqbi1VNE1vNFE9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWJhaCIsImZhbWlseV9uYW1lIjoiSm9zZW1hcmlhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MjkzNzM1ODIsImV4cCI6MTYyOTM3NzE4Mn0.csCrVRDMzSWe1Mizdc7Xp0UxVs8qdNJZKxJ5bQbB-XYeWg9pbLdo6KM1IfECBaj6B_r9iieaPbyNhj4K2pmC4_8LKHfXInYaECdz0NhRy85xcww1IfQg3_MCcqQyhsXGNfmKTW1xhiFDXbg1lCN1Pf16083ikKna66F8GnyuT-5_4ZP2VV5U2g6YIKMZaRKHmPicGGqALxWgZi2JhrHs6wGuPw7w_jCZab7RfMAV9pOBS',
    audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);