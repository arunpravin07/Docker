module.exports = {
  apps : [{
    name        : 'serverweb',
    script      : './serverweb.js',
    error_file  : './err.log',
    out_file      : './out.log',
    time          : true,
  
    env_development : {
     // "ADDRESS": "172.31.44.18",
      "ADDRESS": "0.0.0.0",
       "PORT": "5000",
      "NODE_ENV": "development"
    }
}]
}
