// import { createContext, useState } from 'react';
// import Spinner from '../Spinner';
// import UserAboutTab from './UserAboutTab';
// import UserHomeTab from './UserHomeTab';
// import { useUser, useUserBlogs } from '../../hooks/user';
// import Avatar from '../Avatar';
// import { Post } from '../../types/post';
// import { useSubscribe } from '../../hooks/subscribe';
// import { toast } from 'react-toastify';


// type UserProfileProps = {
//   id: string;
// };
// type UserProfileContextType = {
//   currentUser?: any;
//   blogs?: Post[];
//   loadingUserBlogs?: boolean;
//   loadingSubscriber?: boolean;
//   editingDetails?: boolean;
//   isAuthorizedUser?: boolean;
//   editUserDetails?: (formData: any) => void;
// };
// export const UserProfileContext = createContext<UserProfileContextType>({});

// const UserProfile = ({ id }: UserProfileProps) => {
//   const { currentUser, loading: loadingUser, isAuthorizedUser, editingDetails, editUserDetails, error } = useUser(id);
//   const { blogs, loading: loadingUserBlogs } = useUserBlogs(id);
//   const { subscribe, subscribed, loading: loadingSubscriber, error: SubscriberError, unsubscribe, subscribers, isSameUser } = useSubscribe(id);

//   const [currentTab, setCurrentTab] = useState('Home');

//   const determineTabContent = () => {
//     switch (currentTab) {
//       case 'Home':
//         return <UserHomeTab />;
//       case 'About':
//         return <UserAboutTab />;
//       default:
//         return <></>;
//     }
//   };
//   const toggleSubscription = () => {
//     if (subscribed) {
//       unsubscribe();
//     } else {
//       subscribe();
//     }
//     if (SubscriberError.length > 0) {
//       toast.error(SubscriberError);
//     }

//   }
//   return (
//     <>
//       {loadingUser ? (
//         <div className="w-screen h-screen flex justify-center items-center">
//           <Spinner />
//         </div>
//       ) : error ? (
//         <div className=" mt-7 flex justify-center text-3xl">User not found</div>
//       ) : (
//         <UserProfileContext.Provider
//           value={{
//             currentUser,
//             isAuthorizedUser,
//             blogs,
//             loadingUserBlogs,
//             editingDetails,
//             editUserDetails,
//           }}
//         >
//           <div>
//             <div className="flex flex-row justify-center">
//               <div className="flex flex-col w-full p-5 md:p-24 md:w-4/6 md:pl-36">
//                 <div className="text-3xl hidden md:block">{currentUser?.name}</div>
//                 <div className='md:hidden w-full'>
//                   <div className='flex items-center gap-5'>
//                     <Avatar name={currentUser?.name || ''} size="medium" imageSrc={currentUser?.profilePic} />
//                     <div>
//                       <div className="text-md font-bold">{currentUser?.name}</div>
//                       <p className='text-gray-400 text-sm'> {subscribers.length} Followers</p>
//                     </div>
//                   </div>
//                   <button
//                       className="flex gap-5 w-full justify-center items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
//                       disabled={loadingSubscriber}
//                       onClick={toggleSubscription}>{loadingSubscriber && <Spinner className="w-4 h-4" />}{subscribed ? "Unfollow" : "Follow"} </button>
//                 </div>
//                 <nav className="flex flex-row gap-5 mt-3 border-b">
//                   <div
//                     className={`cursor-pointer hover:text-black py-3 ${currentTab === 'Home' ? 'text-black border-b border-black' : 'text-gray-500'
//                       }`}
//                     onClick={() => setCurrentTab('Home')}
//                   >
//                     Home
//                   </div>
//                   <div
//                     className={`cursor-pointer hover:text-black py-3 ${currentTab === 'About' ? 'text-black border-b border-black' : 'text-gray-500'
//                       }`}
//                     onClick={() => setCurrentTab('About')}
//                   >
//                     About
//                   </div>
//                 </nav>
//                 <div className="mt-3">{determineTabContent()}</div>
//               </div>
//               <div className="border-l border-slate-100 hidden md:block w-2/6 p-8 pr-36">
//                 <Avatar name={currentUser?.name || ''} size="large" imageSrc={currentUser?.profilePic} />


//                 {isSameUser ? (<div>
//                   <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>
//                   <p className='text-gray-400'> {subscribers.length} Followers</p>
//                   <div className="text-sm mt-3">{currentUser?.details}</div>

//                 </div>)
//                   : (<div>
//                     <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>

//                     <p className='text-gray-400'>{subscribers.length} Followers</p>
//                     <div className="text-sm mt-3">{currentUser?.details}</div>
//                     <button
//                       className="flex gap-1 items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
//                       disabled={loadingSubscriber}
//                       onClick={toggleSubscription}>{loadingSubscriber && <Spinner className="w-4 h-4" />}{subscribed ? "Unfollow" : "Follow"} </button>

//                   </div>)}
//               </div>
//             </div>
//           </div>
//         </UserProfileContext.Provider>
//       )}
//     </>
//   );
// };

// export default UserProfile;











// import { createContext, useState } from 'react';
// import Spinner from '../Spinner';
// import UserAboutTab from './UserAboutTab';
// import UserHomeTab from './UserHomeTab';
// import { useUser, useUserBlogs } from '../../hooks/user';
// import Avatar from '../Avatar';
// import { Post } from '../../types/post';
// import { useSubscribe } from '../../hooks/subscribe';
// import { toast } from 'react-toastify';

// type UserProfileProps = {
//   id: string;
// };

// type UserProfileContextType = {
//   currentUser?: any;
//   blogs?: Post[];
//   loadingUserBlogs?: boolean;
//   loadingSubscriber?: boolean;
//   editingDetails?: boolean;
//   isAuthorizedUser?: boolean;
//   editUserDetails?: (formData: any) => void;
// };

// export const UserProfileContext = createContext<UserProfileContextType>({});

// const UserProfile = ({ id }: UserProfileProps) => {
//   const { currentUser, loading: loadingUser, isAuthorizedUser, editingDetails, editUserDetails, error } = useUser(id);
//   const { blogs, loading: loadingUserBlogs } = useUserBlogs(id);
//   const { subscribe, subscribed, loading: loadingSubscriber, error: SubscriberError, unsubscribe, subscribers, isSameUser } = useSubscribe(id);

//   const [currentTab, setCurrentTab] = useState('Home');

//   const determineTabContent = () => {
//     if (currentTab === 'Home') {
//       if (loadingUserBlogs) {
//         return <Spinner />;
//       } else if (!blogs || blogs.length === 0) {
//         return (
//           <div className="flex flex-col items-center mt-5">
//             <div className="text-xl text-gray-600">You have not written any articles yet.</div>
//             <a href="/write-blog" className="write-blog-button mt-3">Write Blog</a>
//           </div>
//         );
//       } else {
//         return <UserHomeTab />;
//       }
//     } else if (currentTab === 'About') {
//       return <UserAboutTab />;
//     } else {
//       return <></>;
//     }
//   };

//   const toggleSubscription = () => {
//     if (subscribed) {
//       unsubscribe();
//     } else {
//       subscribe();
//     }
//     if (SubscriberError.length > 0) {
//       toast.error(SubscriberError);
//     }
//   };

//   return (
//     <>
//       {loadingUser ? (
//         <div className="w-screen h-screen flex justify-center items-center">
//           <Spinner />
//         </div>
//       ) : error ? (
//         <div className="mt-7 flex justify-center text-3xl">User not found</div>
//       ) : (
//         <UserProfileContext.Provider
//           value={{
//             currentUser,
//             isAuthorizedUser,
//             blogs,
//             loadingUserBlogs,
//             editingDetails,
//             editUserDetails,
//           }}
//         >
//           <div>
//             <div className="flex flex-row justify-center">
//               <div className="flex flex-col w-full p-5 md:p-24 md:w-4/6 md:pl-36">
//                 <div className="text-3xl hidden md:block">{currentUser?.name}</div>
//                 <div className="md:hidden w-full">
//                   <div className="flex items-center gap-5">
//                     <Avatar name={currentUser?.name || ''} size="medium" imageSrc={currentUser?.profilePic} />
//                     <div>
//                       <div className="text-md font-bold">{currentUser?.name}</div>
//                       <p className="text-gray-400 text-sm">{subscribers.length} Followers</p>
//                     </div>
//                   </div>
//                   <button
//                     className="flex gap-5 w-full justify-center items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
//                     disabled={loadingSubscriber}
//                     onClick={toggleSubscription}
//                   >
//                     {loadingSubscriber && <Spinner className="w-4 h-4" />}
//                     {subscribed ? 'Unfollow' : 'Follow'}
//                   </button>
//                 </div>
//                 <nav className="flex flex-row gap-5 mt-3 border-b">
//                   <div
//                     className={`cursor-pointer hover:text-black py-3 ${currentTab === 'Home' ? 'text-black border-b border-black' : 'text-gray-500'}`}
//                     onClick={() => setCurrentTab('Home')}
//                   >
//                     Home
//                   </div>
//                   <div
//                     className={`cursor-pointer hover:text-black py-3 ${currentTab === 'About' ? 'text-black border-b border-black' : 'text-gray-500'}`}
//                     onClick={() => setCurrentTab('About')}
//                   >
//                     About
//                   </div>
//                 </nav>
//                 <div className="mt-3">{determineTabContent()}</div>
//               </div>
//               <div className="border-l border-slate-100 hidden md:block w-2/6 p-8 pr-36">
//                 <Avatar name={currentUser?.name || ''} size="large" imageSrc={currentUser?.profilePic} />
//                 {isSameUser ? (
//                   <div>
//                     <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>
//                     <p className="text-gray-400">{subscribers.length} Followers</p>
//                     <div className="text-sm mt-3">{currentUser?.details}</div>
//                   </div>
//                 ) : (
//                   <div>
//                     <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>
//                     <p className="text-gray-400">{subscribers.length} Followers</p>
//                     <div className="text-sm mt-3">{currentUser?.details}</div>
//                     <button
//                       className="flex gap-1 items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
//                       disabled={loadingSubscriber}
//                       onClick={toggleSubscription}
//                     >
//                       {loadingSubscriber && <Spinner className="w-4 h-4" />}
//                       {subscribed ? 'Unfollow' : 'Follow'}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </UserProfileContext.Provider>
//       )}
//     </>
//   );
// };

// export default UserProfile;






import { createContext, useState } from 'react';
import Spinner from '../Spinner';
import UserAboutTab from './UserAboutTab';
import UserHomeTab from './UserHomeTab';
import { useUser, useUserBlogs } from '../../hooks/user';
import Avatar from '../Avatar';
import { Post } from '../../types/post';
import { useSubscribe } from '../../hooks/subscribe';
import { toast } from 'react-toastify';

type UserProfileProps = {
  id: string;
};

type UserProfileContextType = {
  currentUser?: any;
  blogs?: Post[];
  loadingUserBlogs?: boolean;
  loadingSubscriber?: boolean;
  editingDetails?: boolean;
  isAuthorizedUser?: boolean;
  editUserDetails?: (formData: any) => void;
};

export const UserProfileContext = createContext<UserProfileContextType>({});

const UserProfile = ({ id }: UserProfileProps) => {
  const { currentUser, loading: loadingUser, isAuthorizedUser, editingDetails, editUserDetails, error } = useUser(id);
  const { blogs, loading: loadingUserBlogs } = useUserBlogs(id);
  const { subscribe, subscribed, loading: loadingSubscriber, error: SubscriberError, unsubscribe, subscribers, isSameUser } = useSubscribe(id);

  const [currentTab, setCurrentTab] = useState('Home');

  const determineTabContent = () => {
    if (currentTab === 'Home') {
      if (loadingUserBlogs) {
        return <Spinner />;
      } else if (!blogs || blogs.length === 0) {
        return (
          <div className="empty-state-container">
            <div className="empty-state-message">You have not written any articles yet.</div>
            <a href="/publish" className="write-blog-button">Write Blog</a>
          </div>
        );
      } else {
        return <UserHomeTab />;
      }
    } else if (currentTab === 'About') {
      return <UserAboutTab />;
    } else {
      return <></>;
    }
  };

  const toggleSubscription = () => {
    if (subscribed) {
      unsubscribe();
    } else {
      subscribe();
    }
    if (SubscriberError.length > 0) {
      toast.error(SubscriberError);
    }
  };

  return (
    <>
      {loadingUser ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : error ? (
        <div className="mt-7 flex justify-center text-3xl">User not found</div>
      ) : (
        <UserProfileContext.Provider
          value={{
            currentUser,
            isAuthorizedUser,
            blogs,
            loadingUserBlogs,
            editingDetails,
            editUserDetails,
          }}
        >
          <div>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col w-full p-5 md:p-24 md:w-4/6 md:pl-36">
                <div className="text-3xl hidden md:block">{currentUser?.name}</div>
                <div className="md:hidden w-full">
                  <div className="flex items-center gap-5">
                    <Avatar name={currentUser?.name || ''} size="medium" imageSrc={currentUser?.profilePic} />
                    <div>
                      <div className="text-md font-bold">{currentUser?.name}</div>
                      <p className="text-gray-400 text-sm">{subscribers.length} Followers</p>
                    </div>
                  </div>
                  <button
                    className="flex gap-5 w-full justify-center items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
                    disabled={loadingSubscriber}
                    onClick={toggleSubscription}
                  >
                    {loadingSubscriber && <Spinner className="w-4 h-4" />}
                    {subscribed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
                <nav className="flex flex-row gap-5 mt-3 border-b">
                  <div
                    className={`cursor-pointer hover:text-black py-3 ${currentTab === 'Home' ? 'text-black border-b border-black' : 'text-gray-500'}`}
                    onClick={() => setCurrentTab('Home')}
                  >
                    Home
                  </div>
                  <div
                    className={`cursor-pointer hover:text-black py-3 ${currentTab === 'About' ? 'text-black border-b border-black' : 'text-gray-500'}`}
                    onClick={() => setCurrentTab('About')}
                  >
                    About
                  </div>
                </nav>
                <div className="mt-3">{determineTabContent()}</div>
              </div>
              <div className="border-l border-slate-100 hidden md:block w-2/6 p-8 pr-36">
                <Avatar name={currentUser?.name || ''} size="large" imageSrc={currentUser?.profilePic} />
                {isSameUser ? (
                  <div>
                    <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>
                    <p className="text-gray-400">{subscribers.length} Followers</p>
                    <div className="text-sm mt-3">{currentUser?.details}</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-lg mt-3 font-bold">{currentUser?.name}</div>
                    <p className="text-gray-400">{subscribers.length} Followers</p>
                    <div className="text-sm mt-3">{currentUser?.details}</div>
                    <button
                      className="flex gap-1 items-center cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
                      disabled={loadingSubscriber}
                      onClick={toggleSubscription}
                    >
                      {loadingSubscriber && <Spinner className="w-4 h-4" />}
                      {subscribed ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </UserProfileContext.Provider>
      )}
    </>
  );
};

export default UserProfile;
