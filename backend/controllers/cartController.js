import userModel from '../models/userModel.js'

{/** adding products to cart */}

const addToCart = async ( req, res)=> {
    try {
        const {userId, itemId, size} = req.body

        const userData =  await userModel.findById(userId)
        let cartData = await userData.cartData

        if (cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
 
        await userModel.findByIdAndUpdate(userId, {cartData}) 
        res.json({success:true, message:"Added to cart successfully"})

    } catch (error) {
        res.json({success:false, message:error.message})  
    }
}
 


{/** updating user cart */}

const updateCart = async (req,res)=> {
    try {
        const {userId,itemId,size, quantity} = req.body

        const userData =  await userModel.findById(userId)
        let cartData = await userData.cartData

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData}) 
        res.json({success:true, message:"Cart updated successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message}) 
    }
    
} 


{/** getting user cart data*/}

const getUserCart = async ( req, res)=> {
    try {
        const {userId} = req.body

        const userData =  await userModel.findById(userId)
        let cartData = await userData.cartData;
 
        res.json({success:true, cartData})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}



export { addToCart, updateCart, getUserCart };