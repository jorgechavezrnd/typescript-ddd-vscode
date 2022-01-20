import { serialize } from 'bson';
import fs from 'fs';
import { CourseRepository } from '../../domain/CourseRepository';
import { Course } from '../../domain/Course';

export class FileCourseRepository implements CourseRepository {
  private FILE_NAME = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    await fs.promises.writeFile(this.filePath(course.id.value), serialize(course));
  }

  private filePath(id: string): string {
    return `${this.FILE_NAME}.${id}.repo`;
  }
}
