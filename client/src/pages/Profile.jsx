import { useDispatch, useSelector } from 'react-redux'; //redux
import { useRef, useState, useEffect } from 'react';
import { updateUserFailure, updateUserSuccess } from '../redux/user/userSlice.js'; //redux


export default function Profile() {


     const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3000'  // Browser ကနေခေါ်ရင်
  : 'http://backend:3000';    // Docker container ထဲကခေါ်ရင်



  const { currentUser, loading } = useSelector((state) => state.user);
  const [image, setImage] = useState(undefined);
  const [localProfilePic, setLocalProfilePic] = useState(currentUser.profilePicture);
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch(); //redux

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

   useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  // Local storage ကနေ profile picture ကိုဖတ်တဲ့ function
  useEffect(() => {
    const savedProfilePic = localStorage.getItem('profilePicture');
    if (savedProfilePic) {
      setLocalProfilePic(savedProfilePic);
    }
  }, []);

  const handleFileUpload = async (image) => {
    try {
      // ၁. File ရှိမရှိစစ်ဆေးခြင်း
      if (!image) {
        throw new Error('No file selected');
      }

      // ၂. File size ကြီးလားစစ်ဆေးခြင်း (2MB ထက်မကြီးရ)
      const maxSize = 2 * 1024 * 1024;
      if (image.size > maxSize) {
        throw new Error('File size must be less than 2MB');
      }

      // ၃. File type မှန်ရဲ့လားစစ်ဆေးခြင်း
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(image.type)) {
        throw new Error('Please select a valid image file (JPEG, PNG, GIF, WebP)');
      }

      // ၄. File ကို Base64 string အဖြစ်ပြောင်းခြင်း
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const base64String = event.target.result;
          
          // ၅. Local Storage မှာသိမ်းခြင်း
          localStorage.setItem('profilePicture', base64String);
          
          // ၆. State update လုပ်ခြင်း (UI မှာပြဖို့)
          setLocalProfilePic(base64String);
          
          console.log('Profile picture saved to local storage successfully');
                    
        } catch (error) {
          console.error('Error processing file:', error.message);
          alert('Error saving profile picture: ' + error.message);
        }
      };

      reader.onerror = (error) => {
        console.error('File reading error:', error);
        alert('Error reading file');
      };

      // File ကို read လုပ်ခြင်း
      reader.readAsDataURL(image);

    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //dispatch(updateUserStart());
      const res = await fetch(`${API_BASE_URL}/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      /*
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      */
    } catch (error) {
      console.log("error",error);
      //dispatch(updateUserFailure(error));
    }
  };

  // Local storage ကိုရှင်းတဲ့ function (လိုအပ်ရင်သုံးမယ်)
  const clearProfilePicture = () => {
    localStorage.removeItem('profilePicture');
    setLocalProfilePic(null);
    console.log('Profile picture cleared from local storage');
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          src={localProfilePic || currentUser.profilePicture}
          onClick={() => fileRef.current.click()}
        />
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
         <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Update'}
        </button>

      </form>

      <div className='flex justify-between mt-5'>
        <span
          className='text-red-700 cursor-pointer'
        >
          Delete Account
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>

    </div>
  );
}