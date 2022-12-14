import { Router } from 'express';
import { upload } from '../Middlewares/imgUpload.js';
import { signUp, signIn, logout } from '../Controllers/userController.js';

const router = Router();

// router.get('/', getUsers);

router.post('/signup', upload, signUp);

router.post('/signin', signIn);

router.post('/logout', logout);

export default router;
