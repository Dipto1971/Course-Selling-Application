import {selector} from 'recoil';
import {courseState} from '../atoms/course';

export const isCourseLoading = selector ({
    key: 'isCourseLoadingState',
    get: ({get}) => {
        const course = get(courseState);
        return course.isLoading;
    }
});

export const courseDetails = selector({
    key: 'courseDetailsState',
    get: ({get}) => {
        const course = get(courseState);
        return course.course;
    }
});

export const courseTitle = selector ({
    key: 'courseTitleState',
    get: ({get}) => {
        const course = get(courseState);
        return course.course.title;
    }
});

export const coursePrice = selector ({
    key: 'coursePriceState',
    get: ({get}) => {
        const course = get(courseState);
        return course.course.price;
    }
});

export const courseImage = selector ({
    key: 'courseImageState',
    get: ({get}) => {
        const course = get(courseState);
        return course.course.imageLink;
    }
});