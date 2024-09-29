import {atom} from 'recoil';

export const courseState = atom ({
    key: "coourseState",
    default: {
        isLoading: true,
        course: null,
    }
})