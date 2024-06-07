function middleware1(req, res, next) {
  console.log('Middleware 1');
  next(); // Pass control to the next middleware
}

function middleware2(req, res, next){
  console.log('Middleware 2');
  next(); // Pass control to the next middleware
}

module.exports={middleware1,middleware2};