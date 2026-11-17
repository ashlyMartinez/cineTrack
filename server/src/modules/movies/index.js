import {Router} from 'express';

const router = Router(); 

router.get('/', (req, res)=>{
    res.json({sucess:true, data:[]});
})


export default router;