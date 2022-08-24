const development ={
 name: 'development',
 asset_path:'./assets',
 session_cookie_key:'woot',
 db:process.env.db,
 smtp:{
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
        auth: { 
            user: process.env.user,
            pass: process.env.pass
        }
 },
google_client_id: process.env.google_client_id ,
google_client_secret: process.env.google_client_secret ,
google_call_back_url: process.env.google_call_back_url

}

const production={
    name:'production',
}

module.exports=development;