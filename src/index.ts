import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


//Update
async function insertUser(username : string ,password :string , firstname :string, lastname :string ){
    
    const result = await prisma.user.create({
        data:{
            email:username,
            password,
            firstname,
            lastname,
        }
    })
    console.log(result);
}
insertUser("test1@gmail.com","test12","test12","test");


//update 
interface UpdatedObject {
    firstname : string,
    lastname : string,
}
async function  updateUser(username:string, {
    firstname,
    lastname
}:UpdatedObject){
  const update = await prisma.user.update({
        where:{
            email:username
        },
        data:{
            firstname,
            lastname,
        }
    });
    console.log(update);
}
updateUser("test@gmail.com",{
    firstname:"test1",
    lastname:"baruah"
});

//delete 

async function deleteUser(username:string){
    const del = await prisma.user.delete({
        where:{
            email:username
        }
    });
    console.log(del);
}
deleteUser("test@gmail.com")