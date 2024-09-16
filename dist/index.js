"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(username : string ,password :string , firstname :string, lastname :string ){
//     const result = await prisma.user.create({
//         data:{
//             email:username,
//             password,
//             firstname,
//             lastname,
//         }
//     })
//     console.log(result);
// }
// insertUser("test1@gmail.com","test12","test12","test");
//update 
// interface UpdatedObject {
//     firstname : string,
//     lastname : string,
// }
// async function  updateUser(username:string, {
//     firstname,
//     lastname
// }:UpdatedObject){
//   const update = await prisma.user.update({
//         where:{
//             email:username
//         },
//         data:{
//             firstname,
//             lastname,
//         }
//     });
//     console.log(update);
// }
// updateUser("test@gmail.com",{
//     firstname:"test1",
//     lastname:"baruah"
// });
//delete 
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const del = yield prisma.user.delete({
            where: {
                email: username
            }
        });
        console.log(del);
    });
}
deleteUser("test@gmail.com");
