import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Task from "../../component/Task";
import TaskInput from "../../component/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      {/* <div>
        <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
        <p className="text-secondary text-center">
          This lab teach you how to split react component(s)
        </p>
      </div> */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Suppakron Suwannapop" studenId="650612100" />
    </div>
  );
}
