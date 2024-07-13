// import { create } from 'zustand';
// import { createStore } from 'zustand/vanilla';

// export type UserState = {
//   user: {
//     id: string;
//     email: string;
//     name: string | null;
//     thumbnail: string | null;
//     factors: any | null;
//     aud: string;
//     iat: number;
//     iss: string;
//     phone: string;
//     app_metadata: {
//       provider: string;
//       providers: string[];
//     };
//     user_metadata: {
//       avatar_url: string;
//       email: string;
//       email_verified: boolean;
//       full_name: string;
//       iss: string;
//       name: string;
//       phone_verified: boolean;
//       preferred_username: string;
//       provider_id: string;
//       sub: string;
//       user_name: string;
//     };
//     role: string;
//     aal: string;
//     amr: {
//       method: string;
//       timestamp: number;
//     }[];
//     session_id: string;
//     is_anonymous: boolean;
//   } | null;
// };

// export type UserActions = {
//   setUser: (user: UserState['user']) => void;
//   clearUser: () => void;
// };

// export type UserStore = UserState & UserActions;

// export const defaultUserState: UserState = {
//   user: null
// };

// export const createUserStore = (initState: UserState = defaultUserState) => {
//   return createStore<UserStore>()((set) => ({
//     ...initState,
//     setUser: (user) => set({ user }),
//     clearUser: () => set({ user: null })
//   }));
// };

// // export const useUserStore = create((set) => ({
// //   user: null,
// //   setUser: (user: UserState['user']) => set({ user }),
// //   clearUser: () => set({ user: null })
// // }));
