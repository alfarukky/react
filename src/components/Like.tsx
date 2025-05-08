import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  OnClick: () => void;
}
function Like({ OnClick }: Props) {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    OnClick();
  };
  return (
    <div>
      {status ? (
        <AiFillHeart color="red" size={30} onClick={toggle} />
      ) : (
        <AiOutlineHeart color="red" size={30} onClick={toggle} />
      )}
    </div>
  );
}

export default Like;
