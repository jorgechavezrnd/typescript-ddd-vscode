import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoursesPutController } from '../controllers/CoursesPutController';

export const register = (router: Router) => {
  const coursesPutController: CoursesPutController = container.get('Apps.mooc.controllers.CoursesPutController');
  router.put('/courses/:id', (req: Request, res: Response) => coursesPutController.run(req, res));
};
