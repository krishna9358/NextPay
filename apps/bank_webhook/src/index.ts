import express from "express";
import db from "@repo/db/client"
const app = express();

interface paymentInformation {
    token : string,
    userId : number,
    amount : number
}

app.post("/hdfcWebhook", async (req, res)=>{
    const paymentInformation : paymentInformation= {
        token : req.body.token,
        userId : req.body.userId,
        amount : req.body.amount,
    }
    // transaction
    try {
        await db.$transaction([
     db.balance.update({
        where:{
            userId : paymentInformation.userId,
        },
        data:{
            amount: {
                increment : paymentInformation.amount,
            }
        }
    }),
     db.onRampTransaction.update({
        where:{
            token: paymentInformation.token,
        },
        data: {
            status: "Success"
        }
    })
]);
    res.status(200).json({
        message: "caputred"
    })
}catch(e){
    console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
});
}
})


app.listen(3000 , () => {
    console.log("running on port 3000")
})