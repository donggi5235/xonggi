import { ReactNode } from "react";

interface Props {
  post: ReactNode;
}

const PostImages = ({post}:Props) => {
  return (
    <div>
      {post.Repost}
    </div>
  );
};

export default PostImages;