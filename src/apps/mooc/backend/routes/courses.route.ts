import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoursePutController } from '../controllers/CoursePutController';

export const register = (router: Router) => {
  const coursePutController: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', (req: Request, res: Response) => coursePutController.run(req, res));
};
