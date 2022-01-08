import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoursesPutController } from '../controllers/CoursesPutController';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const coursesPutController: CoursesPutController = container.get('Apps.mooc.controllers.CoursesPutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    coursesPutController.run(req, res)
  );
};
