import { memo } from "react";
function Button(props) {
  return (
    <button
      className="rounded-md px-4 py-2 bg-indigo-500 text-white self-end  "
      {...props}
    ></button>
  );
}

export default memo(Button);
