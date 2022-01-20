import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CreateCourseRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CreateCourseRequest';
import { CourseIdMother } from '../../Shared/domain/Courses/CourseIdMother';
import { CourseNameMother } from '../domain/CourseNameMother';
import { CourseDurationMother } from '../domain/CourseDurationMother';

export class CreateCourseRequestMother {
    static create(id: CourseId, name: CourseName, duration: CourseDuration): CreateCourseRequest {
        return { id: id.value, name: name.value, duration: duration.value };
    }

    static random(): CreateCourseRequest {
        return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
    }

    static invalidRequest(): CreateCourseRequest {
        return {
            id: CourseIdMother.random().value,
            name: CourseNameMother.invalidName(),
            duration: CourseDurationMother.random().value
        };
    }
}
