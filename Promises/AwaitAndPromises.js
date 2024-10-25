async function fetchApi(){
    const result=new Promise((res,rej)=>{
        if(true){
            res("Api is fetched successfully");
        }else{
            rej("Jospeh we are facing error...");
        }
    });
    console.log(result);
    return result;
}

async function dbFiles(){
    const result=new Promise((res,rej)=>{
        if(true){
            res("DB files are fetched successfully");
        }else{
            rej("Jospeh we are facing error...");
        }
    });
    console.log(result);
    return result;
}

// fetchApi()
// .then(resMessage=>console.log('Message : ',resMessage))
//.catch(error=>console.log('Error : ',error));
async function testApi(){
try {
    // const api= await fetchApi();
    // const db= await dbFiles();
    
    const [api,db]= await Promise.all([fetchApi(),dbFiles()]);
    console.log(api,'\n',db);
}
catch (err){
    console.log(err);
}
}

testApi();
