'use client'
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

const Button = ({id}) => {
    const router = useRouter();

  const removeTodo = async () => {

        const res = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
            method: "DELETE",
          });
      
          if(res.ok){
              router.refresh()
          }   
  };

  return (
    <button>
      <MdDelete
        className="cursor-pointer text-red-500 text-xl"
        onClick={removeTodo}
      />
    </button>
  );
};

export default Button;
