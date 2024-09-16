//ORM help to build DB quary
//Type Safety 
//node js code is remain same . 

;; const user :{
;;     email :string ,
;;     username : string,
;;     password: string 
;; }

const user = UserDb.find({
    email:"abc@gmail.com"
}) // get back the type of user . 

//Automatic Migrations