import { userState} from '../atoms/user';
import { selector } from 'recoil';

export const isUserLoading = selector({
    key: 'userLoadingState',
    get: ({get}) => {
        const user = get(userState);
        return user.isLoading;
    }
});