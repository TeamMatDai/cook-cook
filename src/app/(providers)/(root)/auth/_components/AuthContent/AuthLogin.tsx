import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const AuthLogin = () => {
  const supabaseClient = useSupabaseClient();
  return (
    <div className="flex flex-col justify-center items-center mt-auto">
      <Auth
        redirectTo={process.env.NEXT_PUBLIC_SUPABASE_AUTH_REDIRECT_TO}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: {
            button: {
              backgroundColor: '#ffe812',
              color: '#000000',
              fontSize: '14px',
              border: 'none'
            },
            container: {
              width: '399px',
              height: '50px',
              flexGrow: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              margin: '0 0 10px',
              padding: '10px 24px',
              borderRadius: '12px'
            }
          }
        }}
        onlyThirdPartyProviders
        providers={['kakao']}
      />
      <Auth
        supabaseClient={supabaseClient}
        redirectTo={process.env.NEXT_PUBLIC_SUPABASE_AUTH_REDIRECT_TO}
        appearance={{
          style: {
            button: {
              color: '#000000',
              fontSize: '14px',
              border: 'none'
            },
            container: {
              width: '399px',
              height: '50px',
              flexGrow: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              margin: '0 0 10px',
              padding: '10px 24px',
              borderRadius: '20px'
            }
          }
        }}
        onlyThirdPartyProviders
        providers={['google']}
      />
    </div>
  );
};

export default AuthLogin;
