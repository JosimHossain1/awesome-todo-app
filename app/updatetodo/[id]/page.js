import UpdateTodo from "@/components/UpdateTodo";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log("Couldn't entered the try block", error);
  }
};

export default async function page( {params} ) {
  const {id} = params;
  const { todo } = await getTopicById(id);
  const { title, description } = todo;
  return <UpdateTodo id={id} title={title} description={description} />;
}