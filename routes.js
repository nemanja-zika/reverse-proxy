export const targetHost = 'https://services-rc.kachingretail.com'

export const router = {
  // when request.headers.host == 'dev.localhost:3000',
  // override target 'http://www.example.org' to 'http://localhost:8000'
  // ex. localhost:3000/hanshake/sokething->localhost:1234/handshake/something
  // first match only, from top to bottom
  'localhost:3000/handshake'     : 'http://localhost:1234',
  'localhost:3000/organization'     : 'http://localhost:20001',  
 };
