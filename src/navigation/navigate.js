import { Home, History, AboutUs, SignIn, SignUp, UserProfile } from '../screens';
import { HOMEPAGR_URL, ABOUTPAGE_URL, HISTORYPAGE_URL, USERPROFILE_URL, SIGNIN_URL, SIGNUP_URL } from './PageLinks'

export const RouterNavigate = [
    { path: HOMEPAGR_URL, element: <Home /> },
    { path: ABOUTPAGE_URL, element: <AboutUs /> },
    { path: HISTORYPAGE_URL, element: <History /> },
    { path: USERPROFILE_URL, element: <UserProfile /> },
    { path: SIGNIN_URL, element: <SignIn /> },
    { path: SIGNUP_URL, element: <SignUp /> },
]