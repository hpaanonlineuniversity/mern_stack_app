import { supabase } from '../supabase';
export default function OAuth() {

  const handleGithubClick = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      if (error) {
        console.log('Could not login with Github', error);
      }
    } catch (error) {
      console.log('Could not login with Github', error);
    }
  };

  return (
    <button
      type='button'
      onClick={handleGithubClick}
      className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'
    >
      Signin With github
    </button>
  );
}