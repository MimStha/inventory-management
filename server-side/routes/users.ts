import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('User API');
});

// module.exports = router;
export default router;
