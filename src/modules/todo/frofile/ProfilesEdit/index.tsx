import { MutableRefObject, useRef } from "react";
import { useProfileData } from "../data";

const ProfileEdit = () => {
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { profiledata, mutateProfileData } = useProfileData();
  const { nickname, email } = profiledata;

  const handieSave = () => {
    mutateProfileData({
      nickname: nicknameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div>
      <input ref={nicknameRef} defaultValue={nickname} />
      <input ref={emailRef} defaultValue={email} />
      <button>save</button>
    </div>
  );
};

export default ProfileEdit;
